import React, {useEffect} from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

export default function MapScreen() {
    let myPosition;

    // useEffect(() => {

    //     Geolocation.setRNConfiguration({skipPermissionRequests: true});
    //     Geolocation.getCurrentPosition(
    //         (pos) => myPosition = pos,
    //         (err) => console.log(err.code, err.message),
    //         {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000})
    // })
    

    // let currentPosition = geolocation
    return (
        <MapView
            style={{flex: 1}}
            provider={PROVIDER_GOOGLE}
            showsUserLocation
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}
        />
    )
}