import express from 'express';
import cors from 'cors';
import FakerRoute from './routes/faker';
import AudioRoute from './routes/audioGenerator';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', FakerRoute);
app.use('/audio/', AudioRoute);



export default app;
