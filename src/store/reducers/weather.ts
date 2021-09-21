import { AnyAction, createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { getWeatherForecastAction } from "store/actions/weather";
import { FetchStatus } from "types/api";
import { ICurrentWeather, IForecast } from "types/weather";


export interface WeatherState {
    current: ICurrentWeather | null;
    forecast: IForecast | null;
    fetchStatus: FetchStatus;
    error: unknown;
}

const initialState : WeatherState = {
    current: null,
    forecast: null,
    fetchStatus: FetchStatus.INITIAL,
    error: null,
}

const weatherSlice = createSlice<WeatherState, SliceCaseReducers<WeatherState>>({
    name: 'weather',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action: AnyAction) => ({...action.payload }))
        builder.addCase(getWeatherForecastAction.pending, (state) => {
            state.fetchStatus = FetchStatus.FETCHING;
            state.error = null;
        });
        builder.addCase(getWeatherForecastAction.fulfilled, (state, { payload }) => {
            state.fetchStatus = FetchStatus.FETCHED;
            state.current = payload[0] || {};
            state.forecast = payload[1] || {};
        });
        builder.addCase(getWeatherForecastAction.rejected, (state, { error }) => {
            state.fetchStatus = FetchStatus.ERROR;
            state.error = error;
        });
    }
});

export const weatherReducer = weatherSlice.reducer;