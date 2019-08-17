import React, {useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import MapBox from '../components/MapBox';
import ClubList from '../components/ClubList';

export default function MapScreen() {
    
    return (
        <View style={styles.container}>
            <MapBox />
            <ClubList />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})

MapScreen.navigationOptions = {
    header: null
}