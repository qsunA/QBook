import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from "next/head";
import { Provider } from 'mobx-react';
import * as getStores from '../store';
import { configure } from 'mobx';
import { withMobx } from 'next-mobx-wrapper';
import AppLayout from '../components/common/AppLayout';

configure({enforceActions:'observed'});

const App = ({Component,store})=>{

    useEffect(()=>{
        console.log(`app useEffect`)
        store.bookStore.initBookList();
    },[]);

    return(
        <>
            <Head>
                <title>App</title>
            </Head>
            <Provider {...store}>
                <AppLayout>
                    <Component/>
                </AppLayout>                
            </Provider>
        </>
    )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  store: PropTypes.object.isRequired
};

export default withMobx(getStores)(App); 