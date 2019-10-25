import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './Header';
import { Footer } from './Footer';

const AppLayout = ({children}) => {

    return (
        <div className="body-container">
            <Header/>           
            <main className="content-wrapper">
                {children}
            </main>
            <Footer/>
            <style jsx>{`

                .body-container{
                    margin : 0;
                    padding : 0;
                    height : 100%;
                    width : 100%;
                    display : flex;
                    flex-direction : column;
                    flex-wrap : nowrap;
                }
                .center-align {
                    margin : 0 auto;
                    width : 1080px;   
                }
                .content-wrapper{
                    flex-grow: 1;
                    overflow: auto;
                    min-height: 2em;
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