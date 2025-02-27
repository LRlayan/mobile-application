import express from "express";
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post("/login", async (req, res) => {
    try{

    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }
});

router.post("/register", async (req, res) => {
    try{

    }catch(err){
        console.log(err);
        res.status(401).json(err);
    }
});

router.post("/refresh-token", async (req, res) => {
    try{

    }catch(err){
        console.log(err);
        res.status(401).json(err);
    }
});

export default router;