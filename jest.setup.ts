import '@testing-library/jest-dom';
import fetchMock from "jest-fetch-mock";
import {lattlong, query, weather} from "./src/__mocks__/data";
fetchMock.enableMocks();

const mockGeolocation = {
    getCurrentPosition: jest.fn()
        .mockImplementation(success => Promise.resolve(success({
            coords: {
                latitude: 46.378333,
                longitude: 13.836667,
            },
        }))),
    watchPosition: jest.fn()
};

jest.mock("./src/services/api", () => ({
    fetchJSON: jest.fn(),
    getLocation:  jest.fn().mockResolvedValue(query),
    getWeather: jest.fn().mockResolvedValue(weather),
    getLocationByLatLng: jest.fn().mockResolvedValue(lattlong),
}));

// @ts-ignore
global.navigator.geolocation = mockGeolocation;
global.fetch = fetchMock;
