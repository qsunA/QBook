import React, { useCallback, useContext } from 'react';
import { useInput } from '../../utils/utils';
import Link from 'next/link';
import UserDetailContext from '../../context/UserDetailContext';

const LoginForm = () => {
    const {logIn} = useContext(UserDetailContext);
    const [userId,onChangeUserId] =  useInput('');
    const [password,onChangePassword] = useInput('');
    const onSubmitForm = useCallback((e)=>{
        e.preventDefault();
        const user= {
            userId : userId,
            password : password
        };

        logIn(user);
    },[userId,password]);
    return (
        <form onSubmit={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <input placeholder="아이디" onChange={onChangeUserId} required value={userId}/>
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <input type="password" placeholder="비밀번호" onChange={onChangePassword} value={password} required/>
            </div>
            <div>
                <button type="submit">로그인</button>
                <Link href="/signUp"><button>회원가입</button></Link> 
            </div>
            <style jsx>{`
                form {
                    display : flex;
                    flex-direction: row;
                    align-items : flex-start;
                }
            `}</style>
        </form>
    );
}

export default LoginForm;