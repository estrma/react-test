import React, {ReactElement} from "react";
import {ThreeDots, Preloader as Loader} from "react-preloader-icon";

const Preloader = (): ReactElement => (
    <Loader
        use={ThreeDots}
        size={42}
        strokeWidth={8}
        strokeColor="#F0AD4E"
        duration={800}
    />
);

export default Preloader;
