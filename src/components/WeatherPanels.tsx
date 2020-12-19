import React, {ReactElement} from "react";

import Preloader from "../components/Preloader";
import WeatherPanel from "../components/WeatherPanel";

interface WeatherPanelsProps {
    isLoading: boolean;
    weather?: WeatherDatapoint[];
    unit: TempUnit;
}

const WeatherPanels = ({
                           isLoading,
                           weather,
                           unit,
                       }: WeatherPanelsProps): ReactElement => (
    <div className="weather-panels">
        {isLoading ? (
            <Preloader />
        ) : (
            <ul>
                {weather && weather.map((item, i) => (
                    <WeatherPanel key={i} unit={unit} {...item} />
                ))}
            </ul>
        )}
    </div>
);

export default WeatherPanels;
