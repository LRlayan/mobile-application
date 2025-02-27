import express from "express";
import {CountdownsModel} from "../model/countdowns-model";
import {deleteCardService, getAllCardsService, saveCardService, updateCardService} from "../service/countdowns-service";

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

CountdownsRoutes.delete('/deleteCard/:id', async (req: express.Request, res:express.Response) => {
    try {
        const id = req.params.id;
        const result = await deleteCardService(parseInt(id));
        res.status(200).send(result);
    } catch (e) {
        console.log("Failed to delete card!", e);
        res.status(400).send("Failed to delete card.");
    }
});

CountdownsRoutes.put('/updateCard/:id', async (req: express.Request, res: express.Response) => {
    try {
        const id = req.params.id;
        const card = req.body;
        const result = await updateCardService(parseInt(id),card);
        res.status(200).send(result);
    } catch (e) {
        console.log("Failed to update card!", e);
        res.status(400).send("Failed to update card.");
    }
});

CountdownsRoutes.get('/getAllCards', async (req: express.Request, res: express.Response) => {
    try {
        const getAllCards = await getAllCardsService();
        res.json(getAllCards);
    } catch (e) {
        console.log("Failed to get all card!", e);
        res.status(400).send("Failed to get all card.");
    }
});