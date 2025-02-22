import { Stack } from 'expo-router/stack';
import { PaperProvider } from "react-native-paper";
import React from "react";
import {Provider} from "react-redux";
import {store} from "./store/store";

export default function Layout() {
    return (
        <Provider store={store}>
            <PaperProvider>
                <Stack>
                    <Stack.Screen name="index" options={{headerShown: false}}/>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                </Stack>
            </PaperProvider>
        </Provider>
    );
}
