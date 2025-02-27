import {UserModel} from "../model/user-model";

export async function saveUserService(user: UserModel) {
    try {

    } catch (e) {
        throw e;
    }
}

export async function verifyUserCredentialsService(username: string, password: string) {
    try {
        if (!username && !password) {
            console.error(`Please required username: ${username} and password: ${password}`);
        }
    } catch (e) {
        throw e;
    }
}