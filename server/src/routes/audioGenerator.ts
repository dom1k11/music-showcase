import { Router } from "express";
import { handleGenerateAudio } from "../controllers/audioGeneratorController";

const router = Router();

router.post("/generate", handleGenerateAudio);

export default router;
