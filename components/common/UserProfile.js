import React, { useContext, useCallback } from 'react';
import { UserContext } from '../../store/UserContext';

const UserProfile = ({user})=>{
    const {actions} = useContext(UserContext);

    const onLogoutClick = useCallback((e)=>{
        e.preventDefault();
        actions.logout();
    },[]);

    return (
        <>
            <div>
            {
                user.nickname
            }님 반갑습니다. 
            </div>
            <button onClick={onLogoutClick}>
                로그아웃
            </button>            
        </>
    );
};

export default UserProfile;