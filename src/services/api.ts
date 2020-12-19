const API_URL = "https://meta-weather.now.sh/api/";

const DAYS_LIMIT = 3;

const fetchJSON = <T>(path: string): Promise<T> => {
    return fetch(`${API_URL}${path}`,)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
};

export const getLocation = async function getLocation(query: string): Promise<WeatherLocation[]> {
    return await fetchJSON(`location/search/?query=${query}`);
};

export const getWeather = async function getWeather(woeid: number): Promise<WeatherDatapoint[]> {
    const response: Weather = await fetchJSON(`location/${woeid}/`);
    return response.consolidated_weather.slice(0, DAYS_LIMIT);
};

export const getLocationByLatLng = async function getLocationByLatLng(lat: number, lng: number): Promise<WeatherLocation[]> {
    return await fetchJSON(`location/search/?lattlong=${lat},${lng}`);
};
