import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentWeather, getWeatherForecast } from 'api/weather';

export const getWeatherForecastAction = createAsyncThunk('weather/getWeatherForecast', async (city: string) => {
    return await Promise.all([getCurrentWeather(city), getWeatherForecast(city)]);
});