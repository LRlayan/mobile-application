import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import Tab from "./app/(tabs)"; // Your component

export default function App() {
    return (
        <PaperProvider>
            <Tab />
        </PaperProvider>
    );
}
