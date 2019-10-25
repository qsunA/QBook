import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from "next/head";
import AppLayout from '../components/common/AppLayout';
import TodoListProvider from '../context/TodoListProvider';
import UserDetailProvider from '../context/UserDetailProvider/UserDetailProvider';

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
            <AppProvider contexts={[UserDetailProvider, TodoListProvider]}>
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