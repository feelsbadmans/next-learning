import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { FetchStatus } from "../../types/api";
import { getWeatherForecastAction } from "../actions/weather";

export interface WeatherState {
    current: any;
    forecast: any;
    fetchStatus: FetchStatus;
    error: unknown;
}

const initialState : WeatherState = {
    current: undefined,
    forecast: undefined,
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