import React from 'react';
import cnBind, { Argument } from 'classnames/bind';

import { CurrentWeather } from 'components/CurrentWeather';
import { ForecastCard } from 'components/ForecastCard';

import { IForecastProps } from './types';

import styles from './Forecast.module.scss';

const cx = cnBind.bind(styles) as (...args: Argument[]) => string;

export const Forecast: React.FC<IForecastProps> = ({ city, current, forecast }) => {
    return (
        <div className={cx('forecast')}>
            <div className={cx('current-weather')}>
                <div className={cx('container')}>
                    <h2>Weather in {city}</h2>
                    <CurrentWeather current={current} />
                </div>
            </div>
            <div className={cx('forecast-cards')}>
                <h3>Forecast for 12 hours</h3>
                <div className={cx('forecast-cards-container')}>
                    {forecast.list.map((value, index) => (
                        <ForecastCard forecast={value} key={`ForecastCard${index}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};
