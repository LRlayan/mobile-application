import bcrypt from "bcrypt";

export async function saveUser(user: { username: string; email: string; password: string }) {
    try {

    } catch (error) {
        console.error("Error saving user:", error);
        throw error;
    }
}

export async function verifyUserCredentials( username: string, password: string ) {
    try {

    } catch (error) {
        console.error("Error verifying user credentials:", error);
        throw error;
    }
}