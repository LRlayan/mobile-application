import express from "express";
import {CountdownsModel} from "../model/countdowns-model";
import {saveCardService} from "../service/countdowns-service";

export const CountdownsRoutes = express.Router();

CountdownsRoutes.post('/saveCard', async (req: express.Request, res: express.Response) => {
    try {
        const card: CountdownsModel = req.body;
        const newCard = new CountdownsModel(card.id,card.title,card.date,card.time,card.repeat,card.color,card.note,card.selectedUnits);
        const result = await saveCardService(newCard);
        res.status(201).send(result);
    } catch (e) {
        console.log("Failed to saved card!", e);
        res.status(400).send("Failed to save card.");
    }
});