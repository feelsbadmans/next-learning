import axios, { AxiosResponse } from "axios";

const key = 'aed6bd52ec5ebf5b1f40aa5ea739aad6';
const host = 'https://api.openweathermap.org/data/2.5/';

export interface ICurrentWeather {
    base: string;
    clouds: {
        all: number;
    };
    cod: number;
    coord: {
        lat: number;
        lon: number;
    };
    dt: number;
    id: number;
    main: {
        feels_like: number;
        grnd_level: number;
        humidity: number;
        pressure: number;
        sea_level: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    name: string;
    sys: {
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type: number;
    };
    timezone: number;
    visibility: number;
    weather: {
        description: string;
        icon: string;
        id: number;
        main: string;
    }[];
    wind: {
        deg: number;
        gust: number;
        speed: number;
    };
}

export interface IForecast {
    city: {
        coord: {
            lat: number;
            lon: number;
        };
        country: string;
        id: number;
        name: string;
        population: number;
        sunrise: number;
        sunset: number;
        timezone: number;
    };
    cnt: number;
    cod: string;
    list: {
        clouds: {
            all: number;
        };
        main: {
            feels_like: number;
            grnd_level: number;
            humidity: number;
            pressure: number;
            sea_level: number;
            temp: number;
            temp_kf: number;
            temp_max: number;
            temp_min: number;
        };
        pop: number;
        sys: {
            pod: string;
        };
        visibility: number;
        weather: {
            description: string;
            icon: string;
            id: number;
            main: string;
        }[];
        wind: {
            deg: number;
            gust: number;
            speed: number;
        };
    }[];
    message: number;
}

export const getCurrentWeather = (city: string) : Promise<ICurrentWeather> => {
    return axios.
        get<Promise<string>, AxiosResponse<ICurrentWeather>>(`${host}/weather?q=${city}&units=metric&appid=${key}`)
        .then((res) => res?.data)
        .catch((res: { status: string }) => {
            throw res?.status;
        });
}

export const getWeatherForecast = (city: string) : Promise<IForecast> => {
    return axios.
        get<Promise<string>, AxiosResponse<IForecast>>(`${host}/forecast?q=${city}&units=metric&cnt=5&appid=${key}`)
        .then((res) => res?.data)
        .catch((res: { status: string }) => {
            throw res?.status;
        });
}