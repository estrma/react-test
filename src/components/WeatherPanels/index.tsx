import React, {ReactElement} from "react";


import WeatherPanel from "components/WeatherPanel";
import {Preloader, ThreeDots} from "react-preloader-icon";

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
        ) : (
            <Preloader
                use={ThreeDots}
                size={42}
                strokeWidth={8}
                strokeColor="#F0AD4E"
                duration={800}
            />
        )}
    </div>
);

export default WeatherPanels;
