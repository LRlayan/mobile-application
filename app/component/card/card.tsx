import * as React from 'react';
import { Card, Text } from 'react-native-paper';
import { CountdownModel } from '../../model/countdown-model';
import {StyleSheet, View} from "react-native";
import {useEffect, useState} from "react";
import * as timers from "node:timers";

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
                                    {unit === "Seconds" ? <Text style={styles.unitText}>{unit && <CountdownTimer secondsVal={unit} />}</Text> : "Seconds"},
                                    {unit === "Minutes" ? <Text style={styles.unitText}>{unit}</Text> : "Minutes"},
                                    {unit === "Hours" ? <Text style={styles.unitText}>{unit}</Text> : "Hours"},
                                    {unit === "Days" ? <Text style={styles.unitText}>{unit}</Text> : "Days"},
                                    {unit === "Weeks" ? <Text style={styles.unitText}>{unit}</Text> : "Weeks"},
                                    {unit === "Months" ? <Text style={styles.unitText}>{unit}</Text> : "Months"},
                                    {unit === "Years" ? <Text style={styles.unitText}>{unit}</Text> : "Years"},
                                </View>
                            ))}
                        </View>
                    </Card.Content>
                </Card>
            ))}
        </>
    );
};

interface CountdownTimerProps {
    secondsVal:string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({secondsVal}) => {
    const [seconds, setSeconds] = useState<number>(new Date().getSeconds());

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 59));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <View style={styles.timerContainer}>
            <Text style={styles.unitText}>{`${secondsVal}\n${seconds}`}</Text>
        </View>
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
    timerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default CountdownCard;
