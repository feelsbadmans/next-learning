import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import homeIcon from "../assets/icons/home.png";
import style from "../styles/City.module.scss";

const Loader = () => <div className={style.forecastWrapper + " " + style.skeleton} />;

const City = () => {
    const router = useRouter();

    const city = useMemo(() => router.query.city || "", [router]);

    return (
        <>
            <Loader />
        </>
    );
};

export default City;
