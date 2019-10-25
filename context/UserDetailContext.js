import { createContext } from "react";

const UserDetailContext = createContext({
    userId: '',
    password: '',
    nickname: '',
    email : '',
    gender : '',
    dateOfBirth : '',
    registerUser : ()=>{},
    logIn : ()=>{},
    logOut : ()=>{}
})

export default UserDetailContext;