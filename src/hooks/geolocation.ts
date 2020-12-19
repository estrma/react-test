import {useEffect, useState} from 'react'

interface GeolocationProps {
    latitude: number;
    longitude: number;
    error?: GeolocationPositionError
}

const useGeolocation = (): GeolocationProps => {

    const [coordinates, setCoordinates] = useState({
        latitude: null,
        longitude: null,
        error: null
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
                    error: null
                });
            }
        };

        const setError = error => {
            if (!didCancel) {
                setCoordinates({
                    latitude: null,
                    longitude: null,
                    error
                })
            }
        };

        let watchId;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(updateCoordinates, setError);
            watchId = navigator.geolocation.watchPosition(
                updateCoordinates,
                setError
            )
        }
        return () => {
            if (watchId) {
                navigator.geolocation.clearWatch(watchId)
            }
            didCancel = true
        }
    }, []);

    return coordinates;
};

export default useGeolocation
