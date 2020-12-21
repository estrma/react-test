import React, {ReactElement} from "react";
import Preloader from "../components/Preloader";

interface LocationTitleProps {
    location: WeatherLocation;
    isLoading: boolean;
}

const LocationTitle = ({location, isLoading}: LocationTitleProps): ReactElement => (
    <h2 className="location-title">
        {isLoading ? (<Preloader />) : (
            location ? (
                <>
                    {location.title}
                    <span>{location.latt_long}</span>
                </>
            ) : 'location not set'
        )}
    </h2>
);

export default LocationTitle;
