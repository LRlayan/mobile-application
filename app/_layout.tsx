import { Stack } from 'expo-router/stack';
import { PaperProvider } from "react-native-paper";
import React from "react";

export default function Layout() {
    return (
        <PaperProvider>
            <Stack>
                <Stack.Screen name="index" options={{headerShown: false}}/>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </PaperProvider>
    );
}
