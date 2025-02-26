import express from 'express';
import {CountdownsRoutes} from "./routes/countdowns-routes";
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(cors({
    origin: 'http://localhost:8081',
    method: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/countdown',CountdownsRoutes);

app.listen(3002, () => console.log("Server start 3002 port"));