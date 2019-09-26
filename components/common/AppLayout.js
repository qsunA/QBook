import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';

const AppLayout = ({children}) => {
    return (
        <div>
            <header>
                <div className="center-align">
                    <div className="header-main">
                        <h1>
                            QBook
                        </h1>
                        <LoginForm/>
                    </div>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    홈
                                </li>
                                <li>
                                    소장책 보기
                                </li>
                                <li>
                                    책 서평
                                </li>
                                <li>
                                    공감 더하기
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <div>
                {children}
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
                }
            `}

            </style>
        </div>
        
    );
}

AppLayout.propTypes = {
    children : PropTypes.node
}

export default AppLayout;