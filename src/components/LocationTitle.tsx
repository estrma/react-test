import React, {ReactElement} from "react";
import Preloader from "../components/Preloader";

interface LocationTitleProps {
    location: WeatherLocation;
}

const LocationTitle = ({location}: LocationTitleProps): ReactElement => (
    <h2 className="location-title">
        {location === null && 'location not set'}
        {location === undefined && (<Preloader />)}
        {location && location.title}
        {location && <span>{location.latt_long}</span>}
    </h2>
);

export default LocationTitle;
