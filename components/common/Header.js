import React, { useContext } from 'react';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import Link from 'next/link';
import { UserContext } from '../../store/UserContext';

export const Header = ()=>{
    const {state} = useContext(UserContext);

    return (
        <header>
            <div className="center-align">
                <div className="header-main">
                    <h1>
                        QBook
                    </h1>
                    {
                        state.user ? <UserProfile user={state.user}/> : <LoginForm/>
                    }
                </div>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>홈</a>
                                </Link>                            
                            </li>
                            <li>
                                <Link href="/myBook">
                                    <a>소장책 보기</a>
                                </Link>   
                            </li>
                            <li>
                                <Link href="/review">
                                    <a>서평보기</a>
                                </Link>   
                            </li>
                            <li>
                                <Link href="/heartPlus">
                                    <a>공감더하기</a>
                                </Link>   
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <style jsx>{`
                div {
                    margin : 0;
                    padding : 0;
                }
                .center-align {
                    margin : 0 auto;
                    width : 1080px;   
                }
                header {
                    margin : 0;
                    padding : 10;
                    background : #49A6A6;
                }
                .header-main{
                    display : flex;
                    flex-direction: row;
                    justify-content : space-around;
                }   
                header form {
                    align-items : flex-end;
                } 
                
                header ul{
                    margin : 0;
                    padding : 0;
                    list-style : none;
                }

                header ul li{
                    list-style-type : none;
                    display : inline-block;
                    color : #DBDFCB;
                }
                header h1{
                    color : #5F5E58
                }
            `}

            </style>
        </header>
    )
}