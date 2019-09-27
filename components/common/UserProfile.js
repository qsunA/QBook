import React from 'react';

const UserProfile = ({user})=>{
    return (
        <>
            <div>
            {
                user.nickname
            }님 반갑습니다. 
            </div>
            <button>
                로그아웃
            </button>            
        </>
    );
};

export default UserProfile;