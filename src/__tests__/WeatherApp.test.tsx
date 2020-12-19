import React from 'react';
import WeatherApp from "../components/WeatherApp";
import {render, screen, fireEvent, act, waitFor} from "@testing-library/react";
import {lattlong, query, weather} from "../__mocks__/data";

const dates = weather.map(({applicable_date}) => applicable_date);
const suggestions = query.map(({title}) => title);

describe('WeatherApp', () => {
    it('fetches initial data correctly', async () => {
        const latlng = lattlong[0].latt_long;
        const title = lattlong[0].title;

        render(<WeatherApp />);

        expect(await screen.findByText(title)).toBeInTheDocument();
        expect(await screen.findByText(latlng)).toBeInTheDocument();

        expect(await screen.findByText(dates[0])).toBeInTheDocument();
        expect(await screen.findByText(dates[1])).toBeInTheDocument();
        expect(await screen.findByText(dates[2])).toBeInTheDocument();

    });

    it('fetches location suggestions on user input and sets location on suggestion selection', async () => {
        const {container} = render(<WeatherApp />);
        fireEvent.change(await screen.getByLabelText('search-input'), {target: {value: 'lol '}});

        expect(await screen.findByText(suggestions[0])).toBeInTheDocument();
        expect(await screen.findByText(suggestions[1])).toBeInTheDocument();
        expect(await screen.findByText(suggestions[2])).toBeInTheDocument();

        act(() => {
            fireEvent.click(screen.getByText(suggestions[2]));
        });

        const location = container.getElementsByClassName('location-title')[0].textContent;
        expect(location).toContain(suggestions[2]);

    });

    it('toggles unit correctly', async () => {
        const {container} = render(<WeatherApp />);
        const radio = container.querySelectorAll('.unit-toggler input')[1];

        fireEvent.click(radio);

        await waitFor(() => {
            const panels = container.getElementsByClassName('weather-panel');
            expect(panels.length).toBe(3);
        });

        const temperatures = Array.from(container.querySelectorAll('.weather-panel__temp'))
            .map(el => el.textContent)
            .join('|');

        expect(temperatures).toBe('Temp: 31°F — 35°F|Temp: 33°F — 38°F|Temp: 31°F — 38°F');

    });

    it('saves last location to local storage', async () => {
        render(<WeatherApp />);
        const id = lattlong[0].woeid;
        const key = 'weather_app_location_id';
        await waitFor(() => expect(localStorage.getItem(key)).toBe(`${id}`));
    });
});
