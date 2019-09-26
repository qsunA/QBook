import { useInput } from "../utils/utils";
import { useCallback, useState } from "react";

const signUp = ()=>{

    const [id,onChangeId] = useInput('');
    const [password,onChangePassword] = useInput('');
    const [passwordChk,onChangePasswordChk] = useInput('');
    const [nickname,onChangeNickname] = useInput('');
    const [email,onChangeEmail] = useInput('');
    const [passwordError,setPasswordError] = useState(false);
 
    const onSubmit = useCallback((e)=>{
        e.preventDefault();
        if(passwordChk !== passwordChk){
            return setPasswordError(true);
        }

        const user = {
            id : id,
            password : password,
            nickname : nickname,
            email : email
        };

        console.log({
            id,
            password,
            passwordChk,
            email,
            nickname
        })
    },[id,password,passwordChk,email,nickname]);

    return(
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <input value={id} required onChange={onChangeId}/>
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
                <input value={email} required onChange={onChangeEmail}/>
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