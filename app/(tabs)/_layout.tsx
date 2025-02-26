import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from 'react';
import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SettingsScreen} from "./settings";
import HomeScreen from "./index";
import {MoreScreen} from "./more";

const Tab = createBottomTabNavigator();

export default function TabLayout() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBar={({ navigation, state, descriptors, insets }) => (
                <BottomNavigation.Bar
                    navigationState={state}
                    safeAreaInsets={insets}
                    onTabPress={({ route, preventDefault }) => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (event.defaultPrevented) {
                            preventDefault();
                        } else {
                            navigation.dispatch({
                                ...CommonActions.navigate(route.name, route.params),
                                target: state.key,
                            });
                        }
                    }}
                    renderIcon={({ route, focused, color }) => {
                        const { options } = descriptors[route.key];
                        if (options.tabBarIcon) {
                            return options.tabBarIcon({ focused, color, size: 24 });
                        }

                        return null;
                    }}
                    getLabelText={({ route }) => {
                        const { options } = descriptors[route.key];
                        const label =
                            typeof options.tabBarLabel === "string"
                                ? options.tabBarLabel
                                : typeof options.title === "string"
                                    ? options.title
                                    : route.name; // Use route.name as a fallback

                        return label;
                    }}
                />
            )}
        >
            <Tab.Screen
                name="home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="home" size={size} color={color} />;
                    },
                }}
            />
            <Tab.Screen
                name="settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="cog" size={size} color={color} />;
                    },
                }}
            />
            <Tab.Screen
                name="more"
                component={MoreScreen}
                options={{
                    tabBarLabel: 'More',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="dots-horizontal" size={size} color={color} />;
                    },
                }}
            />
        </Tab.Navigator>
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
