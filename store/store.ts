import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AnyAction, CombinedState, combineReducers, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist'
import { weatherReducer as weather } from './reducers/weather';

const reducer = combineReducers({
    weather
});

export const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: [],
});

export const persistor = persistStore(store);

export type State = ReturnType<typeof store.getState>;
export type Action = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = (): ThunkDispatch<CombinedState<State>, null, AnyAction> => useDispatch<Action>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;