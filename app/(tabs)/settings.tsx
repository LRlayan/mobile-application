import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Avatar, List, Switch } from "react-native-paper";
import { router } from "expo-router";

export function SettingsScreen() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isShowDates, setIsShowDates] = useState(true);

    const handleLogout = () => {
        router.replace("/"); // Redirect to login page
    };

    return (
        <View style={[styles.container, isDarkMode ? styles.darkContainer : {}]}>
            {/* Header with Avatar */}
            <View style={styles.header}>
                <Text variant="headlineMedium" style={isDarkMode ? styles.darkText : {}}>Settings</Text>
                <TouchableOpacity onPress={() => console.log("Avatar Pressed")}>
                    <Avatar.Icon size={40} icon="account-circle" />
                </TouchableOpacity>
            </View>

            {/* Settings Options */}
            <View style={styles.settingsList}>
                <List.Item
                    title="Account"
                    description="Manage your account settings"
                    left={(props) => <List.Icon {...props} icon="account" />}
                    onPress={() => console.log("Account Pressed")}
                />
                <List.Item
                    title="Notifications"
                    description="Manage notification preferences"
                    left={(props) => <List.Icon {...props} icon="bell" />}
                    onPress={() => console.log("Notifications Pressed")}
                />
                <List.Item
                    title="Privacy"
                    description="Privacy settings"
                    left={(props) => <List.Icon {...props} icon="lock" />}
                    onPress={() => console.log("Privacy Pressed")}
                />

                {/* Dark Mode Toggle */}
                <List.Item
                    title="Dark Mode"
                    description="Enable dark theme"
                    left={(props) => <List.Icon {...props} icon="theme-light-dark" />}
                    right={() => (
                        <Switch value={isDarkMode} onValueChange={() => setIsDarkMode(!isDarkMode)} />
                    )}
                />

                {/* Archive */}
                <List.Item
                    title="Archive"
                    description="View archived items"
                    left={(props) => <List.Icon {...props} icon="archive" />}
                    onPress={() => console.log("Archive Pressed")}
                />

                {/* Show Dates Toggle */}
                <List.Item
                    title="Show Dates"
                    description="Display item dates"
                    left={(props) => <List.Icon {...props} icon="calendar" />}
                    right={() => (
                        <Switch value={isShowDates} onValueChange={() => setIsShowDates(!isShowDates)} />
                    )}
                />
            </View>

            {/* Logout Button */}
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 40,
        backgroundColor: "#fff",
    },
    darkContainer: {
        backgroundColor: "#121212", // Dark mode background
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    settingsList: {
        flex: 1,
    },
    logoutButton: {
        backgroundColor: "red",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 20,
    },
    logoutText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    darkText: {
        color: "#fff",
    },
});

export default SettingsScreen;
