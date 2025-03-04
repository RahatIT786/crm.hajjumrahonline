import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const addCompanyDetails=createAsyncThunk('/companymanagement/addCompany',async(newCompany,{rejectWithValue})=>{
    try{
        const response=await axios.post('/api/companymanagement/addCompany',newCompany,{
            headers: {"Content-Type":"multipart/form-data"},
        }); 
        return response.data.companyDetails;
    }catch(error){
        return rejectWithValue(error.response?.data || "Something went wrong");
    }

   
  
});

const companySlice=createSlic({

});