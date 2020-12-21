import React, {ReactElement} from "react";

interface ErrorProps {
    error: GeolocationPositionError | Error;
}

const Error = ({error}: ErrorProps): ReactElement => (
    <div className="error">
        Error! <br />
        <small>{error.message}</small>
    </div>
);

export default Error;
