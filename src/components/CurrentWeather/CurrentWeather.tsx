import React, { useMemo } from 'react';
import cnBind, { Argument } from 'classnames/bind';

import { WeatherIcon } from 'components/WeatherIcon';
import { capitalizeFirstLetter } from 'utils/stringFunctions';
import { getSign } from 'utils/temperatureSign';

import { ATM_TO_PAS, PAS_TO_MM } from './constants';
import { ICurrentWeatherProps } from './types';

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
    const pressure = useMemo(() => Math.floor((current.main.pressure / ATM_TO_PAS) * PAS_TO_MM), [current.main.pressure]);

    return (
        <div className={cx('weather-block')}>
            <div className={cx('row', 'row-center')}>
                <WeatherIcon icon={icon} />
                <div className={cx('col', 'col-center')}>
                    <span className={cx('temperature')}>{temperature}°C</span>
                    <span className={cx('feels-like')}>feels like {feelsLike}°C</span>
                </div>
            </div>
            <div className={cx('col', 'col-start', 'detail')}>
                <span className={cx('description')}>{description}</span>
                <span>humidity {current.main.humidity}%</span>
                <span>pressure {pressure} mm Hg</span>
                <span>wind {current.wind.speed} km/h</span>
            </div>
        </div>
    );
};
