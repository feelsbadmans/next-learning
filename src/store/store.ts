import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { weatherReducer as weather } from './reducers/weather';

const reducer = combineReducers({
    weather
});

const makeStore = () => (
    configureStore({
        reducer,
        devTools: process.env.NODE_ENV !== 'production',
        enhancers: [],
}));


export type Store = ReturnType<typeof makeStore>
export type State = ReturnType<Store['getState']>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const wrapper = createWrapper<Store>(makeStore);