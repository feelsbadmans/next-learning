import React from 'react';
import { Clouds, FewClouds, Fog, MoreClouds, MoreRain, Rain, Snow, Sunny, Thunderstorm } from 'assets';

import { IWeatherIconProps } from './types';

export const WeatherIcon: React.FC<IWeatherIconProps> = ({ icon }) => {
    switch (icon.slice(0, 2)) {
        case '01':
            return <Sunny />;
        case '02':
            return <FewClouds />;
        case '03':
            return <Clouds />;
        case '04':
            return <MoreClouds />;
        case '09':
            return <MoreRain />;
        case '10':
            return <Rain />;
        case '11':
            return <Thunderstorm />;
        case '13':
            return <Snow />;
        case '50':
            return <Fog />;
        default:
            return <Sunny />;
    }
};
