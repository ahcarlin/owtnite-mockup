import React from 'react';
import { FlatList, StyleSheet, Text, View } from "react-native";


export default function ClubList() {

    const separator = () => {
        return <View style={styles.separator}/>
    }

    return (
        <FlatList
            style={{maxHeight: "54%", flex: 1}}
            data={[
                {key: 'Pure'}, {key: 'Aura'}, {key: 'Etro'}, {key: 'Cle'}, {key: 'Numbers'}, {key: 'Wild West'}, {key: 'Stereo Live'}, {key: 'Belvedere'}
            ]}
            renderItem={({item}) => {
                return <Text style={styles.item}>{item.key}</Text>
            }}
            ItemSeparatorComponent={separator}
        />
    )
}

const styles = StyleSheet.create({
    item: {
       padding: 12,
       fontSize: 16,
       height: 48,
       flex: 1
    },
    separator: {
        height: 1,
        flex: 1,
        width: "100%",
        backgroundColor: "#444"
    }
})