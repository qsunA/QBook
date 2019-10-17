import { useInput } from "../utils/utils";
import { useCallback, useState, useContext } from "react";
import { UserContext } from "../store/UserContext";

const signUp = ()=>{

    const {actions} = useContext(UserContext);
    const [userId,onChangeUserId] = useInput('');
    const [password,onChangePassword] = useInput('');
    const [passwordChk,setPasswordChk] = useState('');
    const [nickname,onChangeNickname] = useInput('');
    const [email,onChangeEmail] = useInput('');
    const [passwordError,setPasswordError] = useState(false);
    const [gender, setGender] = useState('female');

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

        actions.signUp(user);

        console.log({
            userId,
            password,
            passwordChk,
            email,
            nickname
        })
    },[userId,password,passwordChk,email,nickname]);

    const handleRadioChange=(event)=>{
        setGender(event.target.value);
    };

    return(
        <form onSubmit={onSubmit}>
            <div className="form-input">
                <label htmlFor="user-id">아이디</label>
                <input value={userId} required onChange={onChangeUserId}/>
            </div>
            <div className="form-input">
                <label htmlFor="user-password">비밀번호</label>
                <input value={password} required onChange={onChangePassword} type="password"/>
            </div>
            <div className="form-input pw-input">
                <label>비밀번호체크</label>
                <div className="check-pw">
                    <input className="pw-input-form" value={passwordChk} required onChange={onChangePasswordChk} type="password"/>   
                    <div className="pw-alert">                            
                        {
                            passwordError ? "비밀번호가 일치하지 않습니다": "비밀번호는 암호화되어 저장됩니다."
                        }
                    </div>                                  
                </div>
                
            </div>
            <div className="form-input">
                <label htmlFor="user-email">이메일</label>
                <input value={email} required onChange={onChangeEmail} type="email"/>
            </div>
            <div className="form-input">
                <label htmlFor="user-nickname">닉네임</label>
                <input value={nickname} required onChange={onChangeNickname}/>
            </div>
            <div>
                <button type="submit">가입하기</button>
            </div>
            <style jsx>{`
                form,div {
                    flex : 1;
                    width : 100%;
                    margin : 15px;
                }
                .form-input {                    
                    display : flex;
                    flex-direction : row;
                    height : 35px;
                }
                .check-pw{
                    display : flex;
                    flex : 3;
                    height : 55px;
                    width : 100%;
                    flex-direction : column;
                    margin : 0;
                    padding : 0;
                }
                .pw-input{
                    height : 60px;
                }
                label {
                    flex : 1;
                }
                input {
                    flex : 3;
                }
                .pw-input-form {
                    height : 35px;
                }
                .pw-alert{
                    color : red;
                    margin: 0;
                    padding : 0;
                }
            `}</style>
        </form>
    );
}

export default signUp;