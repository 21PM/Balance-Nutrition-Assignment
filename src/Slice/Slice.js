import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


const userSlice = createSlice({
    name:"User",
    initialState:{
        name:"",
        email:"",
        mobileNo:"",
        gender:"",
        dob:"",
        aggreementChecked:false,
        isSendOTP:false,
        isSignIn:false,
        isRegister:false
    },
    reducers:{
        setName:(state,action)=>{
            state.name = action.payload;
        },
        setEmail:(state,action)=>{
            state.email = action.payload;
        },
        setMobileNo:(state,action)=>{
            state.mobileNo = action.payload;
        },
        setGender:(state,action)=>{
            state.gender = action.payload;
        },
        setDob:(state,action)=>{
            state.dob = action.payload;
        },
        setaggreementChecked:(state,action)=>{
            state.aggreementChecked = action.payload;
        },
        setIsSendOTP:(state,action)=>{
            state.isSendOTP = action.payload;
        },
        setIsSignIn:(state,action)=>{
            state.isSignIn = action.payload;
        },
        setIsRegister:(state,action)=>{
            state.isRegister = action.payload;
        }
    }
})


export const {setName,setEmail,setIsSendOTP,setIsSignIn,setIsRegister,setMobileNo,setGender,setDob,setaggreementChecked} = userSlice.actions;

export const userReducer = userSlice.reducer;