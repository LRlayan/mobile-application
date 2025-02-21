import React, {useState} from "react";
import { AnimatedFAB, Searchbar, TextInput  } from "react-native-paper";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";

export default function Tab() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = React.useState("");

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
                                label="Title"
                                value={text}
                                style={styles.textInput}
                                onChangeText={text => setText(text)}
                            />

                            <Text style={styles.label}>DATE AND TIME</Text>
                            <TextInput
                                label="All Days"
                                value={text}
                                style={styles.textInput}
                                onChangeText={text => setText(text)}
                            />
                            <TextInput
                                label="Date"
                                value={text}
                                style={styles.textInput}
                                onChangeText={text => setText(text)}
                            />
                            <TextInput
                                label="Time"
                                value={text}
                                style={styles.textInput}
                                onChangeText={text => setText(text)}
                            />

                            <Text style={styles.label}>REPEAT</Text>
                            <TextInput
                                label="Reapeat"
                                value={text}
                                style={styles.textInput}
                                onChangeText={text => setText(text)}
                            />

                            <Text style={styles.label}>NOTES</Text>
                            <TextInput
                                label="Notes"
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
        height: 20,
        borderRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    label: {
        fontSize: 15,
        color: 'gray',
        marginBottom: 5,
        marginTop: 25,
    }
});
