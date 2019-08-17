import React, {useState, useEffect} from 'react';
import * as Permissions from 'expo-permissions';
import { StyleSheet } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import {latDelta, longDelta} from '../constants/Coordinates';



export default function MapBox() {

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
        style={{flex:1, maxHeight: "45%"}}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            region={{
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: latDelta,
                longitudeDelta: longDelta
            }}
        />
    )
}
