import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Text, Divider, List } from "react-native-paper";

interface OptionItemProps {
    title: string;
}

export function MoreScreen() {
    return (
        <View style={styles.container}>
            <Text variant="headlineMedium" style={styles.title}>More</Text>

            <ScrollView style={styles.scrollContainer}>
                <Divider/>

                <List.Section>
                    <OptionItem title="Version" />
                    <OptionItem title="Developer" />
                </List.Section>

                <Divider />

                <List.Section>
                    <OptionItem title="Write a Review" />
                    <OptionItem title="Share App" />
                </List.Section>

                <Divider />

                <List.Section>
                    <OptionItem title="Privacy Policy & Terms of Use" />
                    <OptionItem title="Help Center" />
                    <OptionItem title="Contact Us" />
                </List.Section>
            </ScrollView>
        </View>
    );
}

const OptionItem: React.FC<OptionItemProps> = ({ title }) => (
    <TouchableOpacity style={styles.option}>
        <List.Item title={title} titleStyle={styles.optionText} />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 69,
    },
    title: {
        fontSize: 30,
        textAlign: "left",
        marginLeft: 20,
        marginBottom: 20,
    },
    scrollContainer: {
        flex: 1,
    },
    option: {
        paddingVertical: 0,
        paddingHorizontal: 10,
    },
    optionText: {
        fontSize: 16,
    },
});

export default MoreScreen;
