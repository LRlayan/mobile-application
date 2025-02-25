import { Stack } from 'expo-router/stack';
import { PaperProvider } from "react-native-paper";
import React from "react";
import {Provider} from "react-redux";
import {store} from "./store/store";
import { LogBox } from "react-native";

export default function Layout() {

    LogBox.ignoreLogs([
        "VirtualizedLists should never be nested inside plain ScrollViews",
    ]);

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
