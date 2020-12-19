import React, {ReactElement} from "react";
import Preloader from "../../components/Preloader";

const LocationSuggestions = ({locations, isLoading, onSelect}: { locations: WeatherLocation[], isLoading: boolean, onSelect: (e) => void }): ReactElement => (
    <div className="location-suggestions">
        {isLoading ? (<Preloader />) : (
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
