import '@testing-library/jest-dom';
import fetchMock from "jest-fetch-mock";
import {lattlong, query, weather} from "./src/__mocks__/data";

const mockGeolocation = {
    getCurrentPosition: jest.fn()
        .mockImplementationOnce(success => Promise.resolve(success({
            coords: {
                latitude: 46.378333,
                longitude: 13.836667,
            },
        }))),
    watchPosition: jest.fn()
};

jest.mock("./src/services/api", () => ({
    fetchJSON: jest.fn(),
    getLocation:  jest.fn(() => Promise.resolve(query)),
    getWeather: jest.fn(() => Promise.resolve(weather)),
    getLocationByLatLng: jest.fn(() => Promise.resolve(lattlong)),
}));

// @ts-ignore
global.navigator.geolocation = mockGeolocation;
global.fetch = fetchMock;
