import "../styles/globals.scss";
import Background from "../containers/Background/Background";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { wrapper } from "../store/store";
import React, { useState } from "react";
import Router from "next/router";
import Loader from "../components/Loader/Loader";

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }: AppProps) => {
    const [loaderShow, setLoaderShow] = useState(false);

    Router.events.on('routeChangeStart', () => { 
        setLoaderShow(true); 
    });
    Router.events.on('routeChangeComplete', () => { 
        setTimeout(() => { setLoaderShow(false); }, 4000) 
    });

    return (
        <Background>
            {
                loaderShow ? (
                    <Loader />
                ) : (
                    <Component {...pageProps} />
                )
            }
        </Background>
    );
}

export default wrapper.withRedux(MyApp)