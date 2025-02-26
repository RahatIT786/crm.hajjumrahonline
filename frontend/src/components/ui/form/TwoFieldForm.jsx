import React, { useEffect, useState } from 'react'
import DelBtn from '../button/DelBtn';
import EditBtn from '../button/EditBtn';
import InputBox from '../InputBox';
import Swal from 'sweetalert2';
import axios from 'axios';

{/*
    📌Two COLUMN REUSABLE FORM 
    📌DEFINE YOUR PROPS AND USE 📄
    📌
    
    */}

const TwoFieldForm = ({
    title="Detalt Title",
    roleColumnName="Role",
    actionColumnName="Action",
    apiUrl,
    inputProps={}
    
}) => {
 


  const [data,setData]=useState([]);

  const [error, setError] = useState("");

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const [roles, setRoles] = useState([
    { id: 1, name: "b2b" },
    { id: 2, name: "b2c" },
    { id: 3, name: "manager" },
  ]);

  const [newRole, setNewRole] = useState("");




   // 🟢 Fetch Data from API (Dynamic)
//    useEffect(() => {

//     axios.get(apiUrl)
//         .then(response=>setData(response.data))
//         .catch(error=>console.error("Error Fetching data: ",error));
//   },[apiUrl]);


   



     // 🟢 Add New Item (Dynamic)
  const handleAddRole = async(e) => {
    e.preventDefault();

    if (!newRole.trim()) {
      //if input value is NOT entered
      setError("Enter the Role");
      return;
    }
    await axios.get('/sanctum/csrf-cookie');
    try{

        const response=await axios.post(
            apiUrl,
            {name:newRole.trim()},
            // {withCredentials:true},
           
        );
        setData((prevData)=>[...prevData,response.data]);
        setNewRole('');
        setError('Enter the Role');
        console.log('Data sent Successfully :',response.data);
    }catch(error){
        console.error("Error while Adding data: ",error);
    }

    // //set new roles
    if(!apiUrl){
        setRoles([...roles, { id: roles.length + 1, name: newRole }]);
    }

    // //clear the input value
    // setNewRole("");

    // //if input value is entered
    // setError("");
  };

  //delete Role
  const handleDeleteRole = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setRoles(roles.filter((role) => role.id !== id));
        Swal.fire("Deleted!", "The role has been deleted.", "success");
      }
    });
  };

  const handleEditRole = (id, name) => {
    setEditId(id);
    setEditText(name);
  };
  const handleSaveEditRole = (e) => {
    e.preventDefault();
    if (!editText.trim()) {
      setError("Enter the Role");
      return;
    }
    setRoles(
      roles.map((role) =>
        role.id === editId ? { ...role, name: editText } : role
      )
    );

    setEditId(null);
  };

  return (
    <section className="d-flex justify-content-center mt-5">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <div className="card-title">{title}</div>
            <div className="d-flex justify-content-between">
              <div></div>
              <div>
                {/* Role Adding form */}
                <form onSubmit={handleAddRole}>
                  <InputBox
                    placeholder={inputProps.placeholder || "Add Role"}
                    label={inputProps.label || "+ Add Role"}
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                  />
                  {error && <p className="text-danger mt-1">{error}</p>}
                </form>
              </div>
            </div>
          </div>
          <div className="card-body">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">{roleColumnName}</th>
                  <th scope="col">{actionColumnName}</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((role, index) => (
                  <tr key={role.id}>
                    <td>{index + 1}</td>
                    <td style={{ textTransform: "uppercase" }}>
                      <form onSubmit={handleSaveEditRole}>
                        {editId === role.id ? (
                          <input
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                          />
                        ) : (
                          role.name
                        )}
                      </form>
                    </td>
                    <div className="form-button-action">
                      <EditBtn
                        onClick={() => handleEditRole(role.id, role.name)}
                      />
                      <DelBtn onClick={() => handleDeleteRole(role.id)} />
                    </div>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TwoFieldForm