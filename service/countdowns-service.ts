import {CountdownsModel} from "../model/countdowns-model";
import {saveCard} from "../repository/countdowns-repository";

export async function saveCardService(card: CountdownsModel) {
    try {
        return saveCard(card);
    } catch (e) {
        console.error("Service layer error: Failed to save cards!", e);
        throw new Error("Failed to save cards. Please try again.");
    }
}