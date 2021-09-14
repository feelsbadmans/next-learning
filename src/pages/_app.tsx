import React, { useState } from 'react';
import { Background } from 'containers/Background/Background';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import Router from 'next/router';
import { wrapper } from 'store/store';

import { Loader } from 'components/Loader';

import 'styles/globals.scss';

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }: AppProps) => {
    const [loaderShow, setLoaderShow] = useState(false);

    Router.events.on('routeChangeStart', () => {
        setLoaderShow(true);
    });
    Router.events.on('routeChangeComplete', () => {
        const time = Router.pathname === '/' ? 2000 : 3000;
        setTimeout(() => {
            setLoaderShow(false);
        }, time);
    });

    return (
        <>
            <Head>
                <title>Weather Forecast</title>
            </Head>
            <Background>{loaderShow ? <Loader /> : <Component {...pageProps} />}</Background>
        </>
    );
};

export default wrapper.withRedux(MyApp);
