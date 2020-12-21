import React from 'react';
import {render, screen} from '@testing-library/react';
import LocationTitle from "../components/LocationTitle";

describe('LocationTitle', () => {
    it('renders the correct text if null', () => {
        render(<LocationTitle isLoading={false} location={null} />);
        expect(screen.getByText('location not set')).toBeInTheDocument();
    });

    it('renders the correct text if location set', () => {
        render(<LocationTitle isLoading={false} location={{
            latt_long: "52.235352,21.009390",
            location_type: "City",
            title: "Warsaw",
            woeid: 523920,
        }} />);
        expect(screen.getByText('Warsaw')).toBeInTheDocument();
    });
});
