import React, { useState } from 'react';
import UserDetailContext from '../UserDetailContext';

const UserDetailProvider = ({children}) => {

    const registerUser = ({
        userId,
        password,
        nickname,
        email,
        gender,
        dateOfBirth
    })=>{
        setUserDetails(prev=>{
            return {
                ...prev,
                userId : userId,
                password : password,
                nickname : nickname, 
                email: email,
                gender : gender,
                dateOfBirth : dateOfBirth 
            }
        })
    }

    const logIn = ({
        userId,
        password
    }) => {
        // repository 기능 수행
        setUserDetails(prev=>{
            return{
                ...prev,
                userId : userId,
                password : password
            }
        })
    }

    const logOff = ({
        userId
    }) => {
        setUserDetails(prev=>{
            return{
                ...prev,
                userId : ''
            }
        })
    }


    const userState = {
        userId: '',
        password: '',
        nickname: '',
        email : '',
        gender : '',
        dateOfBirth : '',
        registerUser,
        logIn,
        logOff
    }

    const [userDetails, setUserDetails] = useState(userState);

    return(
        <UserDetailContext.Provider value = {userDetails}>
            {children}
        </UserDetailContext.Provider>
    )

}

export default UserDetailProvider;