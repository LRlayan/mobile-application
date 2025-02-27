import express from "express";
import dotenv from 'dotenv';
import jwt, {Secret} from 'jsonwebtoken';

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
    const authHeader = req.headers.authorization;
    const refresh_token = authHeader?.split(' ')[1];

    if(!refresh_token)res.status(401).send('No token provided');

    try{
        const payload = jwt.verify(refresh_token as string, process.env.REFRESH_TOKEN as Secret) as {username: string, iat: number};
        const token = jwt.sign({ username: payload.username }, process.env.SECRET_KEY as Secret, {expiresIn: "7d"});
        res.json({accessToken : token});
    }catch(err){
        console.log(err);
        res.status(401).json(err);
    }
});

export default router;