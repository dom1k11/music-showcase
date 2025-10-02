import express from 'express';
import cors from 'cors';
import FakerRoute from './routes/faker';
const app = express();
app.use(cors());
app.use(express.json());

app.use('/', FakerRoute);



export default app;
