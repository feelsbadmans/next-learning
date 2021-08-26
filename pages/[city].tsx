import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';
import { useMemo, useState } from "react";
import { store, useAppSelector } from "../store/store";
import homeIcon from "../assets/icons/home.png";
import style from "../styles/City.module.scss";
import { capitalizeFirstLetter } from "../utils/stringFunctions";
import { getWeatherForecastAction } from "../store/actions/weather";
import { FetchStatus } from "../types/api";
import { GetServerSideProps } from "next";

const Loader = () => <div className={style.forecastWrapper + " " + style.skeleton} />;

const City = ({ city = "", current = {}, forecast = {}, fetchStatus = FetchStatus.INITIAL }) => {

    //This is for gradient...
    const [loaderShow, setLoaderShow] = useState(true);

    const renderComponent = useMemo(() => {
        if (fetchStatus === FetchStatus.FETCHED && !loaderShow) {
            return (
                <div className={style.forecastWrapper}>
                    <div className={style.homeIcon}>
                        <Link href="/" passHref>
                            <Image src={homeIcon} alt="Home" />
                        </Link>
                    </div>
                    <h2>{`Weather in ${city}`}</h2>
                </div>
            );
        }
        if (fetchStatus === FetchStatus.ERROR && !loaderShow) {
            return (
                <div className={style.forecastWrapper}>
                    <div className={style.homeIcon}>
                        <Link href="/" passHref>
                            <Image src={homeIcon} alt="Home" />
                        </Link>
                    </div>
                    <h2>{`Couldn't find Weather Forecast in ${city}!`}</h2>
                    <h3>Please try again!</h3>
                </div>
            );
        }
        setTimeout(() => {
            setLoaderShow(false);
        }, 4000);
        return <Loader />;
    }, [fetchStatus, city, loaderShow]);

    return (
    <>
        <Head>
            <meta name="keywords" content={`weather forecast ${city}`} />
        </Head>
        {renderComponent}
    </>);
};

export default City;

export const getServerSideProps: GetServerSideProps = async (context) => {
    let city = "";

    const cityTemp = context.query.city && Array.isArray(context.query.city) ? context.query.city[0] : context.query.city;
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
};