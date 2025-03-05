import { configureStore } from "@reduxjs/toolkit";
import companyDetailsReducer from './company_management/CompanyDetailSlice';

const store =configureStore({
    reducer:{
        companyDetails:companyDetailsReducer,
    },
});

export default store;