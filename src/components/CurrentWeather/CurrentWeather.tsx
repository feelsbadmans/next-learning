import React, { useMemo } from 'react';
import cnBind, { Argument } from 'classnames/bind';

import { WeatherIcon } from 'components/WeatherIcon';
import { capitalizeFirstLetter } from 'utils/stringFunctions';

import { ICurrentWeatherProps } from './types';
import { getSign } from './utils';

import styles from './CurrentWeather.module.scss';

const cx = cnBind.bind(styles) as (...args: Argument[]) => string;

export const CurrentWeather: React.FC<ICurrentWeatherProps> = ({ current }) => {
    const icon = useMemo(() => current.weather[0].icon, [current]);
    const temperature = useMemo(
        () => `${getSign(current.main.temp)}${Math.round(current.main.temp)}`,
        [current.main.temp],
    );
    const feelsLike = useMemo(
        () => `${getSign(current.main.feels_like)}${Math.round(current.main.feels_like)}`,
        [current.main.feels_like],
    );
    const description = useMemo(() => capitalizeFirstLetter(current.weather[0].description), [current.weather]);

    return (
        <div className={cx('weather-block')}>
            <div className={cx('row', 'row-center')}>
                <WeatherIcon code={icon} />
                <div className={cx('col', 'col-center')}>
                    <span className={cx('temperature')}>{temperature}°C</span>
                    <span className={cx('feels-like')}>feels like {feelsLike}°C</span>
                </div>
            </div>
            <div className={cx('col', 'col-start', 'detail')}>
                <span className={cx('description')}>{description}</span>
                <span>humidity {current.main.humidity}%</span>
                <span>pressure {current.main.pressure}</span>
                <span>wind {current.wind.speed} km/h</span>
            </div>
        </div>
    );
};
