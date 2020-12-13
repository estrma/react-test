import React, {ReactElement} from "react";

const LocationInput = ({value, onChange}: { value: string, onChange: (e) => void }): ReactElement => (
    <label className="location-input">
        Search location: <input value={value} onChange={onChange} />
    </label>
);

export default LocationInput;
