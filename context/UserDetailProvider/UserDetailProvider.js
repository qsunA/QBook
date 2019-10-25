import React, { useState } from 'react';
import UserDetailContext from '../UserDetailContext';

const UserDetailProvider = ({children}) => {

    const registerUser = (user)=>{

        console.log(user);
        setUserDetails(prev=>{
            return {
                ...prev,
                user : user
            }
        })
    }

    const logIn = (user) => {
        console.log(user);
        // repository 기능 수행
        setUserDetails(prev=>{
            return{
                ...prev,
                user : user
            }
        })
    }

    const logOut = () => {
        setUserDetails(prev=>{
            return{
                ...prev,
                user : {}
            }
        })
    }


    const userState = {
        user:{},
        registerUser,
        logIn,
        logOut
    }

    const [userDetails, setUserDetails] = useState(userState);

    return(
        <UserDetailContext.Provider value = {userDetails}>
            {children}
        </UserDetailContext.Provider>
    )

}

export default UserDetailProvider;