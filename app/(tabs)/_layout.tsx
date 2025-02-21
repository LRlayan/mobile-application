import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Text, View, StyleSheet, ViewStyle, TextStyle } from "react-native";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "purple",
                tabBarStyle: { height: 60 },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <View style={styles.iconContainer as ViewStyle}>
                            <FontAwesome size={28} name="home" color={color} />
                            <Text style={styles.label as TextStyle}>Home</Text>
                        </View>
                    ),
                    tabBarLabel: () => null, // Hide default label
                }}
            />

            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    tabBarIcon: ({ color }) => (
                        <View style={styles.iconContainer as ViewStyle}>
                            <FontAwesome size={28} name="cog" color={color} />
                            <Text style={styles.label as TextStyle}>Setting</Text>
                        </View>
                    ),
                    tabBarLabel: () => null, // Hide default label
                }}
            />

            <Tabs.Screen
                name="more"
                options={{
                    title: "More",
                    tabBarIcon: ({ color }) => (
                        <View style={styles.iconContainer as ViewStyle}>
                            <FontAwesome size={28} name="bars" color={color} />
                            <Text style={styles.label as TextStyle}>More</Text>
                        </View>
                    ),
                    tabBarLabel: () => null, // Hide default label
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        alignItems: "center" as ViewStyle["alignItems"],
        justifyContent: "center" as ViewStyle["justifyContent"],
    },
    label: {
        fontSize: 10,
        textAlign: "center",
        color: "black",
        minWidth: 70,
        flexWrap: "nowrap" as TextStyle["flexWrap"]
    },
});
