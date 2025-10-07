import { Router } from "express";
import { handleGetLanguages } from "../controllers/languageController";
const router = Router();

router.get("/", handleGetLanguages);

export default router;
