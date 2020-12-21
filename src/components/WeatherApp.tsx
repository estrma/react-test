import React, {useState, useEffect, ReactElement} from "react";

import useGeolocation from "../hooks/geolocation";
import WeatherPanels from "../components/WeatherPanels";
import LocationInput from "../components/LocationInput";
import LocationSuggestions from "../components/LocationSuggestions";
import UnitToggler from "../components/UnitToggler";
import Error from "../components/Error";
import LocationTitle from "../components/LocationTitle";
import {getLocationByLatLng, getWeather, getLocation} from "../services/api";

const LS_LOCATION_KEY = 'weather_app_location_id';
const CHAR_LIMIT = 2;

const WeatherApp = (): ReactElement => {
    const geolocation = useGeolocation(false);

    const [unit, setUnit] = useState<TempUnit>('C');
    const [location, setLocation] = useState<WeatherLocation | undefined>(undefined);
    const [weather, setWeather] = useState<WeatherDatapoint[] | undefined>(undefined);
    const [locationString, setLocationString] = useState<string>('');
    const [locationSuggestions, setLocationSuggestions] = useState<WeatherLocation[] | undefined>(undefined);

    const [isWeatherLoading, setWeatherLoading] = useState<boolean>(false);
    const [isLocationSuggestionsLoading, setLocationSuggestionsLoading] = useState<boolean>(false);

    const [hasError, setHasError] = useState<boolean>(false);

    const onLocationStringChange = ({target}): void => setLocationString(target.value);
    const onLocationSelect = (locationSuggestion: WeatherLocation): void => setLocation(locationSuggestion);
    const onUnitSelect = (unitSelected: TempUnit): void => setUnit(unitSelected);

    useEffect(() => {
        const {latitude, longitude, error} = geolocation;
        if (error) {
            setHasError(true);
        }
        if (latitude && longitude) {
            getLocationByLatLng(latitude, longitude)
                .then((response: WeatherLocation[]): void => response && setLocation(response[0]))
                .catch(() => setHasError(true));
        }
    }, [geolocation]);

    useEffect(() => {
        if (!location) return;
        const {woeid} = location;
        setWeatherLoading(true);
        getWeather(woeid)
            .then((response: WeatherDatapoint[]): void => setWeather(response))
            .catch(() => setHasError(true));
        localStorage.setItem(LS_LOCATION_KEY, `${woeid}`);
    }, [location]);

    useEffect(() => {
        if (locationString.length > CHAR_LIMIT) {
            setLocationSuggestionsLoading(true);
            getLocation(locationString)
                .then((response: WeatherLocation[]): void => setLocationSuggestions(response))
                .catch(() => setHasError(true));
        } else {
            setLocationSuggestions(undefined);
        }
    }, [locationString]);

    useEffect(() => {
        if (locationSuggestions) {
            setLocationSuggestionsLoading(false);
        }
    }, [locationSuggestions]);

    useEffect(() => {
        if (weather) {
            setWeatherLoading(false);
        }
    }, [weather]);

    return (
        <>
            {hasError && <Error />}
            <UnitToggler units={['C', 'F']} unitSelected={unit} onSelect={onUnitSelect} />
            <LocationTitle location={location} />
            <WeatherPanels unit={unit} weather={weather} isLoading={isWeatherLoading} />
            <LocationInput value={locationString} onChange={onLocationStringChange} />
            <LocationSuggestions isLoading={isLocationSuggestionsLoading} locations={locationSuggestions}
                                 onSelect={onLocationSelect} />
        </>
    )


};

export default WeatherApp;
