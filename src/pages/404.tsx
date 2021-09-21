import React from 'react';
import { Home } from 'assets';
import cnBind, { Argument } from 'classnames/bind';
import Head from 'next/head';
import Link from 'next/link';

import { Loader } from 'components/Loader';

import styles from 'styles/City.module.scss';

const cx = cnBind.bind(styles) as (...args: Argument[]) => string;

const Error = () => {
    return (
        <>
            <Head>
                <meta name="keywords" content={`weather forecast`} />
                <title>Weather Forecast</title>
            </Head>
            <Loader>
                <Link href="/" passHref>
                    <Home className={cx('home-icon')} />
                </Link>
                <div className={cx('error-page')}>
                    <h3>This is not the web page you are looking for!</h3>
                </div>
            </Loader>
        </>
    );
};

export default Error;
