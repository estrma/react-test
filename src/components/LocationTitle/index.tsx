import React, {ReactElement} from "react";
import {Preloader, ThreeDots} from "react-preloader-icon";

const LocationTitle = ({location}: { location: WeatherLocation }): ReactElement => (
    <h2 className="location-title">
        {location === null && 'location not set'}
        {location === undefined && (
            <Preloader
                use={ThreeDots}
                size={30}
                strokeWidth={8}
                strokeColor="#F0AD4E"
                duration={800}
            />
        )}
        {location && location.title}
        {location && <span>{location.latt_long}</span>}
    </h2>
);

export default LocationTitle;
