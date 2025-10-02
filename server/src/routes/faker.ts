import { Router } from 'express';
import { handleGenerateData } from '../controllers/fakerController';

const router = Router();

router.post('/generate', handleGenerateData);

export default router;
