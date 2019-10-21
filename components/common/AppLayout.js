import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import Link from 'next/link';
import { UserContext } from '../../store/UserContext';
import UserProfile from './UserProfile';
import { Header } from './Header';
import { Footer } from './Footer';

const AppLayout = ({children}) => {

    const {state} = useContext(UserContext);

    return (
        <div>
            <Header/>           
            <main className="content-wrapper">
                {children}
            </main>
            <Footer/>
            <style jsx>{`
                div {
                    margin : 0;
                    padding : 0;
                    height : 100%;
                }
                .center-align {
                    margin : 0 auto;
                    width : 1080px;   
                }

                .content-wrapper{
                    height : 100%;
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