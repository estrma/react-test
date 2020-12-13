import React from 'react';
import {render} from '@testing-library/react';
import WeatherPanel from "../components/WeatherPanel";

const unit: TempUnit = 'F';
const abbr: WeatherStateAbbr = 'c';
const props = {
    weather_state_name: 'clear',
    weather_state_abbr: abbr,
    applicable_date: '2019-09-08',
    wind_speed: 4.555,
    max_temp: 1.635,
    min_temp: -0.7350000000000001,
};

describe('WeatherPanel', () => {
    it('calculates °F temperature correctly', () => {
        const {container} = render(
            <WeatherPanel {...props} unit={unit} />
        );
        expect(container.querySelector('.weather-panel__temp').textContent.trim()).toBe('Temp: 31°F — 35°F');
    });
});
