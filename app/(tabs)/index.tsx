import React, {useState} from "react";
import { AnimatedFAB, Searchbar, TextInput, Switch  } from "react-native-paper";
import { DatePickerModal, TimePickerModal } from "react-native-paper-dates";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";

export default function Tab() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = React.useState("");
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [open, setOpen] = useState(false);
    const [timeOpen, setTimeOpen] = useState(false);
    const [time, setTime] = useState<{ hours: number; minutes: number } | undefined>(undefined);
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const formatTime = (hours: number, minutes: number) => {
        return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Countdowns</Text>

            <Searchbar
                placeholder="Search"
                onChangeText={setSearchQuery}
                value={searchQuery}
            />

            <AnimatedFAB
                icon="plus"
                label=""
                extended={false}
                onPress={() => setModalVisible(true)}
                animateFrom="right"
                iconMode="static"
                color='white'
                style={styles.fab}
            />

            {/* Countdown Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        {/* Modal Header with Buttons */}
                        <View style={styles.modalHeader}>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Text style={styles.cancelButton}>Cancel</Text>
                            </TouchableOpacity>
                            <Text style={styles.modalTitle}>Add Countdown</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Text style={styles.doneButton}>Done</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Countdown Content Here */}
                        <View style={styles.countdownContent}>
                            <Text style={styles.label}>TITLE</Text>
                            <TextInput
                                value={text}
                                style={styles.textInput}
                                onChangeText={text => setText(text)}
                            />

                            <Text style={styles.label}>DATE AND TIME</Text>
                            <View style={styles.switchContainer}>
                                <TextInput
                                    value={"All Day"}
                                    style={[styles.textInput, { flex: 1 }]}
                                    editable={false}
                                    right={
                                        <TextInput.Icon
                                            style={styles.switch}
                                            icon={() => (
                                                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                                            )}
                                        />
                                    }
                                />
                            </View>

                            <TextInput
                                value={date ? date.toDateString() : new Date().toDateString()}
                                style={styles.textInput}
                                onFocus={() => {
                                    if (!date) setDate(new Date());
                                    setOpen(true);
                                }}
                                right={<TextInput.Icon icon="calendar" onPress={() => setOpen(true)} />}
                            />
                            <DatePickerModal
                                locale="en"
                                mode="single"
                                visible={open}
                                onDismiss={() => setOpen(false)}
                                date={date || new Date()} // Default to current date
                                onConfirm={(params: any) => {
                                    setOpen(false);
                                    setDate(params.date);
                                }}
                            />

                            <TextInput
                                value={time ? formatTime(time.hours, time.minutes) : "Select Time"}
                                style={styles.textInput}
                                onFocus={() => setTimeOpen(true)}
                                right={<TextInput.Icon icon="clock" onPress={() => setTimeOpen(true)} />}
                            />
                            <TimePickerModal
                                visible={timeOpen}
                                onDismiss={() => setTimeOpen(false)}
                                onConfirm={(params) => {
                                    setTimeOpen(false);
                                    setTime(params);
                                }}
                            />

                            <Text style={styles.label}>REPEAT</Text>
                            <TextInput
                                value={text}
                                style={styles.textInput}
                                onChangeText={text => setText(text)}
                            />

                            <Text style={styles.label}>NOTES</Text>
                            <TextInput
                                value={text}
                                style={styles.textInput}
                                onChangeText={text => setText(text)}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 35,
        color: "purple",
        fontWeight: "bold",
        marginBottom: 20,
    },
    fab: {
        position: "absolute",
        right: 20,
        bottom: 20,
        backgroundColor: "#d990f0",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "white",
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    modalHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    modalTitle: {
        fontSize: 26,
        fontWeight: "bold",
    },
    cancelButton: {
        color: "#0062ff",
        fontSize: 20,
        fontWeight: 'semibold'
    },
    doneButton: {
        color: "#0062ff",
        fontSize: 20,
        fontWeight: 'semibold'
    },
    countdownContent: {
        alignItems: "center",
        padding: 20,
    },
    countdownText: {
        fontSize: 16,
        color: "gray",
    },
    textInput: {
        width: 366,
        height: 50,
        borderRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    label: {
        fontSize: 15,
        color: 'gray',
        marginBottom: 5,
        marginTop: 25,
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "110%",
    },
    switch: {
        width: "300%"
    }
});
