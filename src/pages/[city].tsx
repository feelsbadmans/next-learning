import React, { useMemo } from 'react';
import { Home } from 'assets';
import cnBind, { Argument } from 'classnames/bind';
import { Forecast } from 'containers/Forecast';
import Head from 'next/head';
import Link from 'next/link';
import { getWeatherForecastAction } from 'store/actions/weather';
import { wrapper } from 'store/store';
import { FetchStatus } from 'types/api';
import { ICurrentWeather, IForecast } from 'types/weather';

import { capitalizeFirstLetter } from 'utils/stringFunctions';

import styles from 'styles/City.module.scss';

const cx = cnBind.bind(styles) as (...args: Argument[]) => string;

const City = ({
    city = '',
    current = {} as ICurrentWeather,
    forecast = {} as IForecast,
    fetchStatus = FetchStatus.INITIAL,
}) => {
    const renderComponent = useMemo(() => {
        if (fetchStatus === FetchStatus.FETCHED) {
            return <Forecast city={city} current={current} forecast={forecast} />;
        }
        if (fetchStatus === FetchStatus.ERROR) {
            return (
                <div className={cx('error')}>
                    <h2>{`Couldn't find Weather Forecast in ${city}!`}</h2>
                    <h3>Please try again!</h3>
                </div>
            );
        }
    }, [fetchStatus, city, current, forecast]);

    return (
        <>
            <Head>
                <meta name="keywords" content={`weather forecast ${city}`} />
                <title>Weather in {city}</title>
            </Head>
            <div className={cx('forecast-wrapper')}>
                <Link href="/" passHref>
                    <Home className={cx('home-icon')} />
                </Link>
                {renderComponent}
            </div>
        </>
    );
};

export default City;

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
    let city = '';

    const cityTemp =
        context.query.city && Array.isArray(context.query.city) ? context.query.city[0] : context.query.city;
    if (cityTemp) {
        city = capitalizeFirstLetter(cityTemp);
        await store.dispatch(getWeatherForecastAction(city));
    }

    const state = store.getState().weather;

    return {
        props: {
            city: city,
            current: state.current || null,
            forecast: state.forecast || null,
            fetchStatus: state.fetchStatus,
        },
    };
});
