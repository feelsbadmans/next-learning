import axios, { AxiosResponse } from "axios";

const key = 'aed6bd52ec5ebf5b1f40aa5ea739aad6';
const host = 'https://api.openweathermap.org/data/2.5/';

export const getCurrentWeather = (city: string) => {
    return axios.
        get<Promise<string>, AxiosResponse<any>>(`${host}/weather?q=${city}&units=metric&appid=${key}`)
        .then((res) => res?.data)
        .catch((res: { status: string }) => {
            throw res?.status;
        });
}

export const getWeatherForecast = (city: string) => {
    return axios.
        get<Promise<string>, AxiosResponse<any>>(`${host}/forecast?q=${city}&units=metric&cnt=5&appid=${key}`)
        .then((res) => res?.data)
        .catch((res: { status: string }) => {
            throw res?.status;
        });
}