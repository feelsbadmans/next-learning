import { ICurrentWeather, IForecast } from "types/weather";

export interface IForecastProps {
    city: string;
    current: ICurrentWeather;
    forecast: IForecast;
}