import * as React from 'react';
import { Card, Text } from 'react-native-paper';
import { CountdownModel } from '../../model/countdown-model';
import {StyleSheet} from "react-native";

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
                        <Text variant="bodyMedium">{item.repeat}</Text>
                        <Text variant="bodyMedium">{item.color}</Text>
                        <Text variant="bodyMedium">{item.time ? `${item.time.hours}:${item.time.minutes}` : 'No time set'}</Text>
                        <Text variant="bodyMedium">{item.date ? `${item.date.toDateString()}` : new Date().toDateString()}</Text>
                        <Text variant="bodyMedium">{item.notes}</Text>
                    </Card.Content>
                    {/*<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />*/}
                    {/*<Card.Actions>*/}
                    {/*    <Button>Cancel</Button>*/}
                    {/*    <Button>Ok</Button>*/}
                    {/*</Card.Actions>*/}
                </Card>
            ))}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
    },
});

export default CountdownCard;
