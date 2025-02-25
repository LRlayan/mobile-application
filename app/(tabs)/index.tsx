import React, {useEffect, useState} from "react";
import { AnimatedFAB, Searchbar, TextInput, Switch, Divider } from "react-native-paper";
import { DatePickerModal, TimePickerModal } from "react-native-paper-dates";
import {View, Text, StyleSheet, Modal, TouchableOpacity, FlatList, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import CountdownCard from "../component/card/card";
import {AppDispatch} from "../store/store";
import {useDispatch, useSelector} from "react-redux";
import {CountdownModel} from "../model/countdown-model";
import {addCard, CountdownRootState} from "../reducer/countdownSlice";

export default function Tab() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [date, setDate] = useState<Date>();
    const [open, setOpen] = useState(false);
    const [timeOpen, setTimeOpen] = useState(false);
    const [time, setTime] = useState<{ hours: number; minutes: number } | undefined>(undefined);
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [repeatText, setRepeatText] = useState("Every Day");
    const [isColorDropdownVisible, setColorDropdownVisible] = useState(false);
    const [colorsInput, setColorInput] = useState("white");
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const colorsOptions = ["red", "green", "white", "yellow", "black"];
    const repeatOptions = ["Every Day", "Every Week", "Every 2 Weeks", "Every Month", "Every Year"];

    const formatTime = (hours: number, minutes: number) => {
        return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    };

    const [title, setTitle] = React.useState("");
    const [notes, setNotes] = React.useState("");
    const dispatch = useDispatch<AppDispatch>();
    const cards = useSelector((state: CountdownRootState) => state.countdown.countdowns) || [];
    const [allCards, setAllCards] = useState<CountdownModel[]>(cards);


    useEffect(() => {
        setAllCards(cards);
    }, [cards]);

    const handleSubmit = () => {
        if (!title || !date) return;
        const configDate = date ? date.toDateString() : new Date().toDateString();
        const newCountdown = new CountdownModel(title,new Date(configDate),time,repeatText,colorsInput,notes);
        dispatch(addCard(newCountdown));
        setModalVisible(false);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Countdowns</Text>

            <Searchbar
                placeholder="Search"
                onChangeText={setSearchQuery}
                value={searchQuery}
                style={{ marginBottom: 20 }}
            />

            <CountdownCard data={allCards}/>

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
                            <TouchableOpacity onPress={handleSubmit}>
                                <Text style={styles.doneButton}>Done</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Countdown Content Here */}
                        <KeyboardAvoidingView
                            behavior={Platform.OS === "ios" ? "padding" : "height"}
                            style={{ flex: 1 }}
                        >
                            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                <ScrollView
                                    contentContainerStyle={{ flexGrow: 1 }}
                                    keyboardShouldPersistTaps="handled"
                                >
                                    <View style={styles.countdownContent}>
                                        <Text style={styles.label}>TITLE</Text>
                                        <TextInput
                                            value={title}
                                            style={styles.textInput}
                                            onChangeText={text => setTitle(text)}
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

                                        {!isSwitchOn && (
                                            <>
                                                <TextInput
                                                    value={time ? formatTime(time.hours, time.minutes) : "00:00"}
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
                                            </>
                                        )}

                                        <View>
                                            <Text style={styles.label}>REPEAT</Text>

                                            <TouchableOpacity
                                                onPress={() => setDropdownVisible(!isDropdownVisible)}
                                                activeOpacity={0.7}
                                                style={{ zIndex: 1 }}
                                            >
                                                <TextInput
                                                    value={repeatText}
                                                    style={styles.textInput}
                                                    editable={false}
                                                    right={<TextInput.Icon icon="chevron-down" />}
                                                    onPressIn={() => setDropdownVisible(true)}
                                                />
                                            </TouchableOpacity>

                                            {isDropdownVisible && (
                                                <Modal
                                                    transparent={true}
                                                    animationType="fade"
                                                    visible={isDropdownVisible}
                                                    onRequestClose={() => setDropdownVisible(false)}
                                                >
                                                    <TouchableOpacity
                                                        style={styles.modalOverlay}
                                                        activeOpacity={1}
                                                        onPress={() => setDropdownVisible(false)}
                                                    >
                                                        <View style={styles.dropdownContainer}>
                                                            <FlatList
                                                                data={repeatOptions}
                                                                keyExtractor={(item) => item}
                                                                renderItem={({ item }) => (
                                                                    <TouchableOpacity
                                                                        style={styles.optionItem}
                                                                        onPress={() => {
                                                                            setRepeatText(item);
                                                                            setDropdownVisible(false);
                                                                        }}
                                                                    >
                                                                        <Text style={styles.optionText}>{item}</Text>
                                                                    </TouchableOpacity>
                                                                )}
                                                            />
                                                        </View>
                                                    </TouchableOpacity>
                                                </Modal>
                                            )}
                                        </View>

                                        <View>
                                            <Text style={styles.label}>COLORS</Text>
                                            <TouchableOpacity
                                                onPress={() => setColorDropdownVisible(!isColorDropdownVisible)}
                                                activeOpacity={0.7}
                                                style={{ zIndex: 1 }}
                                            >
                                                <TextInput
                                                    value={colorsInput}
                                                    style={styles.textInput}
                                                    editable={false}
                                                    right={<TextInput.Icon icon="chevron-down" />}
                                                    onPressIn={() => setColorDropdownVisible(true)}
                                                />
                                            </TouchableOpacity>

                                            {isColorDropdownVisible && (
                                                <Modal
                                                    transparent={true}
                                                    animationType="fade"
                                                    visible={isColorDropdownVisible}
                                                    onRequestClose={() => setColorDropdownVisible(false)}
                                                >
                                                    <TouchableOpacity
                                                        style={styles.modalOverlay}
                                                        activeOpacity={1}
                                                        onPress={() => setColorDropdownVisible(false)}
                                                    >
                                                        <View style={styles.dropdownContainer}>
                                                            <FlatList
                                                                data={colorsOptions}
                                                                keyExtractor={(item) => item}
                                                                renderItem={({ item }) => (
                                                                    <TouchableOpacity
                                                                        style={styles.optionItem}
                                                                        onPress={() => {
                                                                            setColorInput(item);
                                                                            setColorDropdownVisible(false);
                                                                        }}
                                                                    >
                                                                        <Text style={styles.optionText}>{item}</Text>
                                                                    </TouchableOpacity>
                                                                )}
                                                            />
                                                        </View>
                                                    </TouchableOpacity>
                                                </Modal>
                                            )}
                                        </View>

                                        <Text style={styles.label}>NOTES</Text>
                                        <TextInput
                                            value={notes}
                                            style={styles.textInput}
                                            onChangeText={text => setNotes(text)}
                                        />
                                    </View>
                                </ScrollView>
                            </TouchableWithoutFeedback>
                        </KeyboardAvoidingView>
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
        flex: 1,
        maxHeight: "95%",
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
        paddingBottom: 30
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
        textAlign: "center",
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
    },
    menuAnchor: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: 'white',
        alignSelf: 'flex-start'
    },
    optionItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    optionText: {
        fontSize: 18,
    },
    dropdownContainer: {
        width: "80%",
        backgroundColor: "white",
        borderRadius: 5,
        padding: 10,
        elevation: 5,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
});
