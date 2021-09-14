import axios, { AxiosResponse } from "axios";
import { ICurrentWeather, IForecast } from "types/weather";

const key = 'aed6bd52ec5ebf5b1f40aa5ea739aad6';
const host = 'https://api.openweathermap.org/data/2.5/';

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