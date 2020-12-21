import {useEffect, useState} from 'react'

interface GeolocationProps {
    latitude: number;
    longitude: number;
    geolocationError?: GeolocationPositionError
}

const useGeolocation = (watchPosition: boolean): GeolocationProps => {
    const [coordinates, setCoordinates] = useState({
        latitude: null,
        longitude: null,
        geolocationError: null
    });

    useEffect(() => {
        let didCancel;
        const updateCoordinates = ({coords}) => {
            const {
                latitude,
                longitude,
            } = coords;

            if (!didCancel) {
                setCoordinates({
                    latitude,
                    longitude,
                    geolocationError: null
                });
            }
        };

        const setError = error => {
            if (!didCancel) {
                setCoordinates({
                    latitude: null,
                    longitude: null,
                    geolocationError: error
                })
            }
        };

        let watchId;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(updateCoordinates, setError);
           if (watchPosition) {
                watchId = navigator.geolocation.watchPosition(
                    updateCoordinates,
                    setError,

                )
           }
        }
        return () => {
            if (watchId) {
                navigator.geolocation.clearWatch(watchId)
            }
            didCancel = true
        }
    }, [watchPosition]);

    return coordinates;
};

export default useGeolocation
