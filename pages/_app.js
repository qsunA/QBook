import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from "next/head";
import AppLayout from '../components/common/AppLayout';
import { UserProvider } from '../store/UserContext';
import TodoListProvider from '../context/TodoListProvider';

const AppProvider = ({contexts, children}) => contexts.reduce(
    (prev,context)=> React.createElement(context, {
        children : prev
    }),
    children  
);

const App = ({Component})=>{

    // useEffect(()=>{
    //     console.log(`app useEffect`)
    //     store.bookStore.initBookList();
    // },[]);

    return(
        <div>
            <Head>
                <title>App</title>
            </Head>
            <AppProvider contexts={[UserProvider, TodoListProvider]}>
                <AppLayout>
                    <Component/>
                </AppLayout>   
            </AppProvider>
            <style jsx>{`
                div{
                    height: 100%;
                }
            `}</style>              
        </div>
    )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  store: PropTypes.object.isRequired
};

export default App; 