import React, {ReactElement} from "react";
import {Preloader, ThreeDots} from "react-preloader-icon";

const LocationSuggestions = ({locations, isLoading, onSelect}: { locations: WeatherLocation[], isLoading: boolean, onSelect: (e) => void }): ReactElement => (
    <div className="location-suggestions">
        {isLoading ? (<Preloader
            use={ThreeDots}
            size={42}
            strokeWidth={8}
            strokeColor="#F0AD4E"
            duration={800}
        />) : (
            <ul>
                {locations && locations.length === 0 && <li>No results</li>}
                {locations && locations.map((location: WeatherLocation) => <li key={location.woeid}
                                                                               role="listitem"
                                                                               onClick={() => onSelect(location)}
                >{location.title}</li>)}
            </ul>
        )}
    </div>
);

export default LocationSuggestions;
