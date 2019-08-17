import React, {useState, useEffect} from 'react';
import * as Permissions from 'expo-permissions';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function MapScreen() {
    const LAT_DELTA = 0.0922;
    const LONG_DELTA = 0.0421;

    const [position, setPosition] = useState({coords:{latitude:0, longitude:0}});

    async function requestGeolocationPermission() {
        const {status, permissions} = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
            return navigator.geolocation.getCurrentPosition(
                (pos) => setPosition(pos),
                (err) => console.log(err.code, err.message),
                {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
            )
        }
    }

    useEffect(() => {
        requestGeolocationPermission();
    }, [])
    
    return (
        <MapView
            style={styles.container}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            region={{
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: LAT_DELTA,
                longitudeDelta: LONG_DELTA
            }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: "45%"
    }
})