import express from 'express';
import {CountdownsRoutes} from "./routes/countdowns-routes";
import authRoutes from "./routes/auth-routes";
import cors from 'cors';
import {authenticateToken} from "./middleware/authenticate";

const app = express();

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/countdown',authenticateToken,CountdownsRoutes);

app.listen(3000, () => {
    console.log("Server is running 3000 port");
});
