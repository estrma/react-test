import React, {ReactElement} from "react";

interface LocationInputProps {
    value: string;
    onChange: (e) => void;
}

const LocationInput = ({value, onChange}: LocationInputProps): ReactElement => (
    <label className="location-input">
        Search location: <input value={value} onChange={onChange} aria-label="search-input" />
    </label>
);

export default LocationInput;
