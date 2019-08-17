import React, {useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import MapBox from '../components/MapBox';

export default function MapScreen() {
    
    return (
        <View style={styles.container}>
            <MapBox/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})