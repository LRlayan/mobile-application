import {useEffect, useState} from "react";
import {Text} from "react-native-paper";
import {StyleSheet} from "react-native";
import * as React from "react";

const CountdownTimer = ({ targetDate, type }: { targetDate: any, type: string }) => {
    const [timeLeft, setTimeLeft] = useState({
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0,
        weeks: 0,
        months: 0,
        years: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const target = new Date(targetDate).getTime();

            if (target < now) {
                setTimeLeft({ years: 0, months: 0, weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            let differenceInMilliseconds = target - now;

            const years = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365));
            differenceInMilliseconds -= years * (1000 * 60 * 60 * 24 * 365);

            const months = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 30));
            differenceInMilliseconds -= months * (1000 * 60 * 60 * 24 * 30);

            const weeks = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 7));
            differenceInMilliseconds -= weeks * (1000 * 60 * 60 * 24 * 7);

            const days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
            differenceInMilliseconds -= days * (1000 * 60 * 60 * 24);

            const hours = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));
            differenceInMilliseconds -= hours * (1000 * 60 * 60);

            const minutes = Math.floor(differenceInMilliseconds / (1000 * 60));
            differenceInMilliseconds -= minutes * (1000 * 60);

            const seconds = Math.floor(differenceInMilliseconds / 1000);

            setTimeLeft({ years, months, weeks, days, hours, minutes, seconds });
        };

        calculateTimeLeft();
        const interval = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <Text style={styles.unitText}>
            {type === "Seconds" && `${timeLeft.seconds}`}
            {type === "Minutes" && `${timeLeft.minutes}`}
            {type === "Hours" && `${timeLeft.hours}`}
            {type === "Days" && `${timeLeft.days}`}
            {type === "Weeks" && `${timeLeft.weeks}`}
            {type === "Months" && `${timeLeft.months}`}
            {type === "Years" && `${timeLeft.years}`}
        </Text>
    );
};


const styles = StyleSheet.create({
    unitText: {
        color: '#333',
        textAlign: 'center',
    },
});

export default CountdownTimer;