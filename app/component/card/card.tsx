import * as React from 'react';
import { Card, Text } from 'react-native-paper';
import { CountdownModel } from '../../model/countdown-model';
import {StyleSheet, View} from "react-native";
import CountdownTimer from "../timer/timer";

interface CountdownCardProps {
    data: CountdownModel[];
}

const CountdownCard: React.FC<CountdownCardProps> = ({ data }) => {
    console.log("Data : ",data.map((unit) => unit.selectedUnits))
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
                                    {unit === "Seconds" && (
                                        <Text style={styles.unitText}>
                                            {unit}{"\n"}
                                            <CountdownTimer type="Seconds" targetDate={item.date} />
                                        </Text>
                                    )}
                                    {unit === "Minutes" && (
                                        <Text style={styles.unitText}>
                                            {unit}{"\n"}
                                            <CountdownTimer type="Minutes" targetDate={item.date} />
                                        </Text>
                                    )}
                                    {unit === "Hours" && (
                                        <Text style={styles.unitText}>
                                            {unit}{"\n"}
                                            <CountdownTimer type="Hours" targetDate={item.date} />
                                        </Text>
                                    )}
                                    {unit === "Days" && (
                                        <Text style={styles.unitText}>
                                            {unit}{"\n"}
                                            <CountdownTimer type="Days" targetDate={item.date} />
                                        </Text>
                                    )}
                                    {unit === "Weeks" && (
                                        <Text style={styles.unitText}>
                                            {unit}{"\n"}
                                            <CountdownTimer type="Weeks" targetDate={item.date} />
                                        </Text>
                                    )}
                                    {unit === "Months" && (
                                        <Text style={styles.unitText}>
                                            {unit}{"\n"}
                                            <CountdownTimer type="Months" targetDate={item.date} />
                                        </Text>
                                    )}
                                    {unit === "Years" && (
                                        <Text style={styles.unitText}>
                                            {unit}{"\n"}
                                            <CountdownTimer type="Years" targetDate={item.date} />
                                        </Text>
                                    )}
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
    timerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    unitText: {
        color: '#333',
        textAlign: 'center',
    },
});

export default CountdownCard;
