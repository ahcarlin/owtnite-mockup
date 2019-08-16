import React, {useState, useEffect} from 'react';
import * as Permissions from 'expo-permissions';
import {PermissionsAndroid} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import Geolocation from 'react-native-geolocation-service';

export default function MapScreen() {
    const [position, setPosition] = useState({coords:{latitude:0, longitude:0}});

    async function requestGeolocationPermission() {
        const {status, permissions} = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
            return navigator.geolocation.getCurrentPosition(
                (pos) => {
                    setPosition(pos);
                    console.log(position)
                        },
                        (err) => {console.log(err.code, err.message)},
                        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
            )
        }
    }

    useEffect(() => {
        requestGeolocationPermission();

        // Geolocation.getCurrentPosition(
        //     (pos) => {
        //         console.log(pos)
        //         return myPosition = pos;
        //     },
        //     (err) => {console.log(err.code, err.message)},
        //     {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000})
    }, [])
    

    // let currentPosition = geolocation
    return (
        <MapView
        re
            style={{flex: 1}}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            region={{
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}
            // initialRegion={{
            //     latitude: 37.78825,
            //     longitude: -122.4324,
            //     latitudeDelta: 0.0922,
            //     longitudeDelta: 0.0421
            // }}
        />
    )
}