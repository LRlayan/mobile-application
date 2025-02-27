import bcrypt from "bcrypt";
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export async function saveUser(user: { username: string; email: string; password: string }) {
    try {
        const hashedPassword = await bcrypt.hash(user.password, 10)
        const newUser = await prisma.user.create({
            data: {
                username: user.username,
                email: user.email,
                password: hashedPassword
            }
        });
        return newUser;
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