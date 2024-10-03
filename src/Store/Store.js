import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from "../Slice/Slice";

const store = configureStore({
    reducer:{
        userData:userReducer
    }
})

export default store;