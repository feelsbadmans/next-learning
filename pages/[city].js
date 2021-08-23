import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../store/store";
import homeIcon from "../assets/icons/home.png";
import style from "../styles/City.module.scss";
import { capitalizeFirstLetter } from "../utils/stringFunctions";
import { getWeatherForecastAction } from "../store/actions/weather";
import { FetchStatus } from "../types/api";

const Loader = () => <div className={style.forecastWrapper + " " + style.skeleton} />;

const City = ({ city = "" }) => {
    const dispatch = useDispatch();
    const { current, forecast, fetchStatus } = useAppSelector((store) => store.weather);

    useEffect(() => {
        if (city) {
            dispatch(getWeatherForecastAction(city));
        }
    }, [city, dispatch]);

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
            <div className={style.forecastWrapper}>
                <div className={style.homeIcon}>
                    <Link href="/" passHref>
                        <Image src={homeIcon} alt="Home" />
                    </Link>
                </div>
                <h2>{`Couldn't find Weather Forecast in ${city}!`}</h2>
                <h3>Please try again!</h3>
            </div>;
        }
        setTimeout(() => {
            setLoaderShow(false);
        }, 4000);
        return <Loader />;
    }, [fetchStatus, city, loaderShow]);

    return <>{renderComponent}</>;
};

export default City;

export async function getServerSideProps({ query }) {
    let city = "";

    const cityTemp = query.city && Array.isArray(query.city) ? query.city[0] : query.city;
    if (cityTemp) {
        city = capitalizeFirstLetter(cityTemp);
    }

    return {
        props: {
            city,
        },
    };
}