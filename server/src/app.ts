import express from 'express';
import cors from 'cors';
import FakerRoute from './routes/faker';
import AudioRoute from './routes/audioGenerator';
import LanguageRoute from "./routes/languages";

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', FakerRoute);
app.use('/audio/', AudioRoute);
app.use('/languages', LanguageRoute);



export default app;
