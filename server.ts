import express from 'express';
import {CountdownsRoutes} from "./routes/countdowns-routes";
import authRoutes from "./routes/auth-routes";
import cors from 'cors';
import {authenticateToken} from "./middleware/authenticate";

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:8081',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/countdown',authenticateToken,CountdownsRoutes);

app.listen(3002, () => console.log("Server start 3002 port"));