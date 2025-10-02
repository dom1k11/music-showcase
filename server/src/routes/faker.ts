import { Router } from 'express';
import { handleGenerateData } from '../controllers/fakerController';

const router = Router();

router.get('/generate', handleGenerateData);

export default router;
