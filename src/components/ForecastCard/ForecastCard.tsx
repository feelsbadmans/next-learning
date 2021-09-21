import React, { useMemo } from 'react';
import cnBind, { Argument } from 'classnames/bind';
import moment from 'moment';

import { WeatherIcon } from 'components/WeatherIcon';
import { getSign } from 'utils/temperatureSign';

import { IForecastCardProps } from './types';

import styles from './ForecastCard.module.scss';

const cx = cnBind.bind(styles) as (...args: Argument[]) => string;

export const ForecastCard: React.FC<IForecastCardProps> = ({ forecast }) => {
    const icon = useMemo(() => forecast.weather[0].icon, [forecast]);
    const temperature = useMemo(
        () => `${getSign(forecast.main.temp)}${Math.round(forecast.main.temp)}`,
        [forecast.main.temp],
    );

    const time = useMemo(() => moment(forecast.dt_txt).format('hh:mm a'), [forecast.dt_txt]);

    return (
        <div className={cx('forecast-card')}>
            <span className={cx('time')}>{time}</span>
            <div className={cx('card-content')}>
                <WeatherIcon icon={icon} />
                <span className={cx('temperature')}>{temperature}°C</span>
            </div>
        </div>
    );
};
