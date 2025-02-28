// import { Password } from '@mui/icons-material';
// import axios from 'axios';
// import React, { useCallback, useEffect, useState } from 'react'
// import { useNavigate } from 'react-router';
// // import { getCsrfToken } from '../api';

// const Login = () => {

//     const [formData,setFormData]=useState({
//         email:"",
//         password:""
//     });

//     const [message,setMessage]=useState("");

//     const navigate=useNavigate();

//     const handleChange=(e)=>{
//         setFormData({
//             ...formData,[e.target.name]:e.target.value
//         });
//     }


//     const handleLogin=useCallback(async(e)=>{
//         e.preventDefault();

//         try {
//             // await getCsrfToken();
//             await axios.get("/sanctum/csrf-cookie");
//             const { data } = await axios.post("/api/login", formData);
//             // localStorage.setItem("token", data.token);
//             sessionStorage.setItem("token", data.token);

//             console.log('your token is : ',{data});
//             navigate("/dashboard");
//         } catch (error) {
//             setMessage(error.response?.data?.message || "Login Failed ❌");
//             console.log("not completeed")
//         }
//     },[formData,navigate]);



//     const images = [
//         "https://getwallpapers.com/wallpaper/full/e/8/8/150915.jpg",
//         "https://getwallpapers.com/wallpaper/full/8/9/c/150932.jpg",
//         "https://getwallpapers.com/wallpaper/full/4/f/9/150836.jpg",
//         "https://getwallpapers.com/wallpaper/full/7/6/2/150840.jpg"
//       ];

//     const BackgroundChanger = () => {
//         const [bgImage, setBgImage] = useState(images[0]);
      
//         useEffect(() => {
//           const interval = setInterval(() => {
//             setBgImage(prevImage => {
//               const currentIndex = images.indexOf(prevImage);
//               const nextIndex = (currentIndex + 1) % images.length;
//               return images[nextIndex];
//             });
//           }, 3000); // Change every 3 seconds
      
//           return () => clearInterval(interval); // Cleanup on unmount
//         }, []);





//   return (
//     <div style={{
//         backgroundImage: `url("${bgImage}")`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: "100vh",
//         width: "100%",
//         transition: "background-image 1s ease-in-out"
//     }}>
//       <div>
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           <button type="submit">Login</button>
//         </form>
//         {message && <p>{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default Login;
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 🎨 Background Image Changer Component
const BackgroundChanger = ({ children }) => {
  const images = [
    "https://getwallpapers.com/wallpaper/full/8/9/c/150932.jpg",
    "https://getwallpapers.com/wallpaper/full/e/8/8/150915.jpg",
    
    "https://getwallpapers.com/wallpaper/full/4/f/9/150836.jpg",
    // "https://getwallpapers.com/wallpaper/full/7/6/2/150840.jpg"
  ];

  const [bgImage, setBgImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImage(prevImage => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      backgroundImage: `url("${bgImage}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      width: "100%",
      transition: "background-image 1s ease-in-out",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      {children}
    </div>
  );
};

// 🔐 Login Component
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  };

  const handleLogin = useCallback(async (e) => {
    e.preventDefault();

    try {
      await axios.get("/sanctum/csrf-cookie");
      const { data } = await axios.post("/api/login", formData);
      sessionStorage.setItem("token", data.token);
      console.log('✅ Your token is:', data.token);
      navigate("/dashboard");
    } catch (error) {
      setMessage(error.response?.data?.message || "❌ Login Failed");
      console.log("❌ Login not completed");
    }
  }, [formData, navigate]);

  return (
    <BackgroundChanger>
      <div style={{
        background: "rgba(0, 0, 0, 0.7)", 
        padding: "30px", 
        borderRadius: "10px", 
        color: "white",
        width: "350px",
        textAlign: "center"
      }}>
        <h2>🔐 Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
              border: "1px solid #ccc"
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
              border: "1px solid #ccc"
            }}
          />
          <button type="submit" style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#28a745",
            color: "white",
            fontSize: "16px",
            cursor: "pointer"
          }}>Login</button>
        </form>
        {message && <p style={{ color: "red" }}>{message}</p>}
      </div>
    </BackgroundChanger>
  );
};

export default Login;
