import React from "react";
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text variant="headlineMedium">Settings!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});