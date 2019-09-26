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
        </div>
        
    );
}

AppLayout.propTypes = {
    children : PropTypes.node
}

export default AppLayout;