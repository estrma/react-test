import React, {ReactElement} from "react";

import {convert} from "../../services/temperature";

interface WeatherPanelProps extends WeatherDatapoint {
    unit: TempUnit;
}

const ROOT_IMG_URL = 'https://www.metaweather.com/static/img/weather/png/64/';

const format = (temp: number, unit: TempUnit): string => `${Math.round(convert(temp, unit))}°${unit}`;

const WeatherPanel = ({
                          weather_state_name,
                          weather_state_abbr,
                          applicable_date,
                          wind_speed,
                          min_temp,
                          max_temp,
                          unit
                      }: WeatherPanelProps): ReactElement => (
    <li className="weather-panel">
        <div className="weather-panel__date">{applicable_date}</div>
        <img src={`${ROOT_IMG_URL}${weather_state_abbr}.png`} alt={weather_state_name} />
        <div className="weather-panel__state">{weather_state_name}</div>
        <div className="weather-panel__wind">Wind: {Math.round(wind_speed)}</div>
        <div className="weather-panel__temp">Temp: {format(min_temp, unit)} — {format(max_temp, unit)}</div>
    </li>
);

export default WeatherPanel;
