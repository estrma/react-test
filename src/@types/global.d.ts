interface WeatherLocation {
    title: string;
    location_type: string;
    woeid: number;
    latt_long: string;
}

interface WeatherDatapoint {
    weather_state_name: string;
    weather_state_abbr: WeatherStateAbbr;
    applicable_date: string;
    wind_speed: number;
    min_temp: number;
    max_temp: number;
}

interface Weather {
    consolidated_weather: WeatherDatapoint[];
}

type TempUnit = 'C' | 'F';
type WeatherStateAbbr = 'sn' | 'sl' | 'h' | 't' | 'hr' | 'lr' | 's' | 'hc' | 'lc' | 'c';
// enums?
