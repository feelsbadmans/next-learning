import React from 'react';
import { SearchBar } from 'containers/SearchBar/SearchBar';
import Head from 'next/head';

const metaSeoYesss = `weather forecast moscow new-york london paris rome barcelona dushanbe москва погода прогноз тамбов`;

const Index = () => {
    return (
        <>
            <Head>
                <meta name="keywords" content={metaSeoYesss} />
            </Head>
            <div className="search-bar-wrapper">
                <h1>Weather Forecast</h1>
                <SearchBar />
            </div>
        </>
    );
};

export default Index;
