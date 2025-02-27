import {CountdownsModel} from "../model/countdowns-model";
import {deleteCard, getAllCards, saveCard, updateCard} from "../repository/countdowns-repository";

export async function saveCardService(card: CountdownsModel) {
    try {
        return saveCard(card);
    } catch (e) {
        console.error("Service layer error: Failed to save cards!", e);
        throw new Error("Failed to save cards. Please try again.");
    }
}

export async function deleteCardService(id: number) {
    try {
        return deleteCard(id);
    } catch (e) {
        console.error("Service layer error: Failed to delete cards!", e);
        throw new Error("Failed to delete cards. Please try again.");
    }
}

export async function getAllCardsService() {
    try {
         return await getAllCards();
    } catch (e) {
        console.log("Failed to get all card!", e);
        throw e;
    }
}