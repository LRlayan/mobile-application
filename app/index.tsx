import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Text, TextInput, Card } from "react-native-paper";
import { useRouter } from "expo-router";

export default function AuthScreen() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isSignIn, setIsSignIn] = useState(true);
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!username || !password) {
            setError("Username and Password are required!");
            return;
        }
        setError(""); // Clear errors
        if (username === "ramesh" && password === "1234") {
            router.replace("/(tabs)");
        } else {
            setError("Invalid username or password!");
        }
    };

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Content>
                    <Text style={styles.title}>{isSignIn ? "Sign In" : "Sign Up"}</Text>

                    {error ? <Text style={styles.errorText}>{error}</Text> : null}

                    <TextInput
                        label="Username"
                        mode="outlined"
                        value={username}
                        onChangeText={setUsername}
                        style={styles.input}
                    />

                    <TextInput
                        label="Password"
                        mode="outlined"
                        value={password}
                        secureTextEntry={!showPassword}
                        onChangeText={setPassword}
                        right={
                            <TextInput.Icon
                                icon={showPassword ? "eye-off" : "eye"}
                                onPress={() => setShowPassword(!showPassword)}
                            />
                        }
                        style={styles.input}
                    />

                    {!isSignIn && (
                        <TextInput
                            label="Confirm Password"
                            mode="outlined"
                            secureTextEntry={!showPassword}
                            style={styles.input}
                        />
                    )}

                    <Button mode="contained" onPress={handleLogin} style={styles.button}>
                        {isSignIn ? "Login" : "Sign Up"}
                    </Button>

                    {isSignIn && (
                        <TouchableOpacity onPress={() => alert("Forgot Password clicked!")}>
                            <Text style={styles.forgotText}>Forgot Password?</Text>
                        </TouchableOpacity>
                    )}

                    <TouchableOpacity onPress={() => setIsSignIn(!isSignIn)}>
                        <Text style={styles.signupText}>
                            {isSignIn ? "Don't have an account? " : "Already have an account? "}
                            <Text style={styles.signupLink}>
                                {isSignIn ? "Sign Up" : "Sign In"}
                            </Text>
                        </Text>
                    </TouchableOpacity>
                </Card.Content>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
    },
    card: {
        width: "90%",
        paddingVertical: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    input: {
        marginBottom: 15,
    },
    button: {
        marginTop: 10,
    },
    forgotText: {
        marginTop: 10,
        textAlign: "center",
        color: "#007AFF",
    },
    errorText: {
        color: "red",
        textAlign: "center",
        marginBottom: 10,
    },
    signupText: {
        marginTop: 10,
        textAlign: "center",
        fontSize: 14,
        color: "#000",
    },
    signupLink: {
        color: "#007AFF",
        fontWeight: "bold",
    },
});
