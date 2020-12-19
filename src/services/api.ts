
const API_URL = "https://meta-weather.now.sh/api/";

const fetchJSON = <T>(path: string): Promise<T> => {
    return fetch(`${API_URL}${path}`,)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .catch((response) => {
            console.log(response);
        });
};

export const getLocation = async function getLocation<T>(query: string): Promise<T> {
    return await fetchJSON(`location/search/?query=${query}`);
};

export const getWeather = async function getWeather<T>(woeid: number): Promise<T> {
    return await fetchJSON(`location/${woeid}/`); // Location
};

export const getLocationByLatLng = async function getLocationByLatLng<T>(lat: number, lng: number): Promise<T> {
    return await fetchJSON(`location/search/?lattlong=${lat},${lng}`);
};
