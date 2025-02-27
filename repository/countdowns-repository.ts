import {PrismaClient} from '@prisma/client';
import {CountdownsModel} from "../model/countdowns-model";

const prisma = new PrismaClient();

export async function saveCard(card: CountdownsModel) {
    try {
        const newCard = await prisma.card.create({
            data:{
                id: card.id,
                title: card.title,
                date: card.date,
                time: card.time,
                repeat: card.repeat,
                color: card.color,
                note: card.note,
                selectedUnits: card.selectedUnits
            }
        });
        return newCard;
    } catch (e) {
        console.log("error save card ", e);
    }
}

export async function getAllCards() {
    try {
        return await prisma.card.findMany();
    } catch (e) {
        console.log("error get all cards ", e);
    }
}