import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Avatar, List } from "react-native-paper";

export function SettingsScreen() {
    return (
        <View style={styles.container}>
            {/* Header with Avatar */}
            <View style={styles.header}>
                <Text variant="headlineMedium">Settings</Text>
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
            </View>

            {/* Logout Button */}
            <TouchableOpacity style={styles.logoutButton} onPress={() => console.log("Logout Pressed")}>
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
});

export default SettingsScreen;
