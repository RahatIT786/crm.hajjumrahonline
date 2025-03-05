import { Backup } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// export const addCompanyDetails=createAsyncThunk('/companymanagement/addCompany',async(newCompany,{rejectWithValue})=>{
//     try{
//         const response=await axios.post('/api/companymanagement/addCompany',newCompany,{
//             headers: {"Content-Type":"multipart/form-data"},
//         }); 
//         return response.data.companyDetails;
//     }catch(error){
//         return rejectWithValue(error.response?.data || "Something went wrong");
//     }

   
  
// });

export const fetchCompanies = createAsyncThunk('company/getCompanyDetails',async()=>{
    // await  axios.get('/sanctum/csrf-cookie'); //csrf-cookie -token
    const token = sessionStorage.getItem("token");
    const response =await axios.post('/api/getcompany',{
        headers:{
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data.companyDetails; // Assuming the backend returns the newly created PNR
})

const CompanyDetailSlice=createSlice({
    name:'companyDetail',
    initialState:{
        data:[],
        status:'idle',
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCompanies.pending,(state)=>{
            state.status="loading";
        })
        .addCase(fetchCompanies.fulfilled,(state,action)=>{
            state.status="succeeded";
            state.data=action.payload;
        })
        .addCase(fetchCompanies.rejected,(state,action)=>{
            state.status="failed";
            state.error=action.error.message;
        })
    },
});

export default CompanyDetailSlice.reducer;