import React, { useContext, useCallback } from 'react';
import UserDetailContext from '../../context/UserDetailContext';

const UserProfile = ({user})=>{
    const {logOut} = useContext(UserDetailContext)

    const onLogoutClick = useCallback((e)=>{
        e.preventDefault();
        logOut();
    },[]);

    return (
        <div className="user-wrapper">
            <div>
            {
                user.userId
            }님 반갑습니다. 
            </div>
            <button onClick={onLogoutClick}>
                로그아웃
            </button>  
            <style jsx>{`
                .user-wrapper{
                    display : flex;
                    flex-direction: row;
                    align-items : flex-start;
                }
            `}</style>          
        </div>
    );
};

export default UserProfile;