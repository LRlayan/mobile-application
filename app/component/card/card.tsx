import * as React from 'react';
import { Card, Text } from 'react-native-paper';
import { CountdownModel } from '../../model/countdown-model';
import {StyleSheet, View} from "react-native";

interface CountdownCardProps {
    data: CountdownModel[];
}

const CountdownCard: React.FC<CountdownCardProps> = ({ data }) => {
    return (
        <>
            {data.map((item: CountdownModel, index: number) => (
                <Card key={index} style={{ marginBottom: 10 }}>
                    <Card.Content style={styles.container}>
                        <Text variant="titleLarge">{item.title}</Text>
                        <Text variant="bodyMedium">{item.notes}</Text>
                        <View style={styles.unitsContainer}>
                            {item.selectedUnits.map((unit, unitIndex) => (
                                <View key={unitIndex} style={styles.unit}>
                                    <Text style={styles.unitText}>{unit}</Text>
                                </View>
                            ))}
                        </View>
                    </Card.Content>
                </Card>
            ))}
        </>
    );
};

const styles = StyleSheet.create({
    card: {
        marginBottom: 10,
    },
    container: {
        padding: 10,
    },
    unitsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    unit: {
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        paddingTop: 5,
        paddingBottom: 5,
        margin: 0.8,
        flex: 1,
        maxWidth: '30%',
        alignItems: 'center',
    },
    unitText: {
        color: '#333',
        textAlign: 'center',
    },
});

export default CountdownCard;
