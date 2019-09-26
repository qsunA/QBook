import React, { useCallback } from 'react';
import { useInput } from '../../utils/utils';

const LoginForm = () => {
    const [id,onChangeId] =  useInput('');
    const [password,onChangePassword] = useInput('');
    const onSubmitForm = useCallback((e)=>{
        e.preventDefault();
        const user= {
            userId : id,
            password : password
        };
        console.log(user);
    },[id,password]);
    return (
        <form onSubmit={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <input placeholder="아이디" onChange={onChangeId} required value={id}/>
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <input type="password" placeholder="비밀번호" onChange={onChangePassword} value={password}/>
            </div>
            <div>
                <button type="submit">로그인</button>
                <button>회원가입</button>
            </div>
            <style jsx>{`
                form {
                    display : flex;
                    flex-direction: row;
                    align-items : flex-end;
                }
            `}</style>
        </form>
    );
}

export default LoginForm;