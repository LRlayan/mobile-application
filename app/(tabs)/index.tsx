import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AnimatedFAB, Searchbar } from "react-native-paper";

export default function Tab() {
    const [searchQuery, setSearchQuery] = React.useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Countdowns</Text>

            <Searchbar
                placeholder="Search"
                onChangeText={setSearchQuery}
                value={searchQuery}
            />

            <AnimatedFAB
                icon="plus"
                label=""
                extended={false}
                onPress={() => console.log("FAB Pressed")}
                animateFrom="right"
                iconMode="static"
                color='white'
                style={styles.fab}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 35,
        color: "purple",
        fontWeight: "bold",
        marginBottom: 20
    },
    fab: {
        position: "absolute",
        right: 20,
        bottom: 20,
        backgroundColor: "#d990f0",
        color: 'white'
    },
});
