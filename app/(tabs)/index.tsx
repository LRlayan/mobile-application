import { View, Text, StyleSheet } from 'react-native';

export default function Tab() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Countdown</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    title: {
        fontSize: 35,
        color: 'purple',
        fontWeight: "bold"
    }
});
