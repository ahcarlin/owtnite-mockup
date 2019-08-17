import React, {useState, useEffect} from 'react';
import * as Permissions from 'expo-permissions';
import {Alert} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import {latDelta, longDelta} from '../constants/Coordinates';
import {clubs as myClubs} from '../constants/Clubs'



export default function MapBox() {

    const [position, setPosition] = useState({coords:{latitude:0, longitude:0}});
    const [clubs, setClub] = useState([...myClubs]);

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

    const _iconPress = (props) => {
        return Alert.alert(
            props.title,
            props.description,
            [
                {text: 'Cancel', style: 'cancel'},
                {text: 'OK'}
            ]
        )
    }

    useEffect(() => {
        requestGeolocationPermission();
        console.log(clubs)
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
        >
            {
                clubs.map((club) => {
                    return <Marker image={require('../assets/images/owl.png')} key={club.index} 
                    coordinate={club.latlng} 
                    onPress={ () =>_iconPress(club)}
                    />
                })
            }
        </MapView>
    )
}
