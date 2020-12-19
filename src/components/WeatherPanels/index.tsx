import React, {ReactElement} from "react";

import Preloader from "../../components/Preloader";
import WeatherPanel from "../../components/WeatherPanel";

interface WeatherPanelsProps {
    weather: WeatherDatapoint[] | undefined;
    unit: TempUnit;
}

const WeatherPanels = ({
                           weather,
                           unit,
                       }: WeatherPanelsProps): ReactElement => (
    <div className="weather-panels">
        {weather ? (
            <ul>
                {weather.map((item: WeatherDatapoint, i: number) => <WeatherPanel key={i} unit={unit} {...item} />)}
            </ul>
        ) : (<Preloader />)}
    </div>
);

export default WeatherPanels;
