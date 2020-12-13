import React, {ReactElement} from "react";

const LocationSuggestions = ({locations, onSelect}: { locations: WeatherLocation[], onSelect: (e) => void }): ReactElement => (
    <ul className="location-suggestions">
        {locations.map((location: WeatherLocation) => <li key={location.woeid}
                                                          role="listitem"
                                                          onClick={() => onSelect(location)}
        >{location.title}</li>)}
    </ul>
);

export default LocationSuggestions;
