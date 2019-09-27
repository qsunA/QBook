import { useInput } from "../utils/utils";
import { useCallback, useState } from "react";

const signUp = ()=>{

    const [userId,onChangeUserId] = useInput('');
    const [password,onChangePassword] = useInput('');
    const [passwordChk,setPasswordChk] = useState('');
    const [nickname,onChangeNickname] = useInput('');
    const [email,onChangeEmail] = useInput('');
    const [passwordError,setPasswordError] = useState(false);

    const onChangePasswordChk = useCallback((e) => {
        setPasswordError(e.target.value!==password);
        setPasswordChk(e.target.value);    
    }, [password]);
 
    const onSubmit = useCallback((e)=>{
        e.preventDefault();
        if(passwordChk !== passwordChk){
            return setPasswordError(true);
        }

        const user = {
            userId : userId,
            password : password,
            nickname : nickname,
            email : email
        };

        console.log({
            userId,
            password,
            passwordChk,
            email,
            nickname
        })
    },[userId,password,passwordChk,email,nickname]);

    return(
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <input value={userId} required onChange={onChangeUserId}/>
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <input value={password} required onChange={onChangePassword} type="password"/>
            </div>
            <div>
                <label>비밀번호체크</label>
                <input value={passwordChk} required onChange={onChangePasswordChk} type="password"/>
                {
                    passwordError &&<div>비밀번호가 일치하지 않습니다.</div>
                }
            </div>
            <div>
                <label htmlFor="user-email">이메일</label>
                <input value={email} required onChange={onChangeEmail} type="email"/>
            </div>
            <div>
                <label htmlFor="user-nickname">닉네임</label>
                <input value={nickname} required onChange={onChangeNickname}/>
            </div>
            <div>
                <button type="submit">가입하기</button>
            </div>
        </form>
    );
}

export default signUp;