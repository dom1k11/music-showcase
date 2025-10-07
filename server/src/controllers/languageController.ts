import { controller } from "../utils/controllerWrapper";
import { SUPPORTED_LANGUAGES } from "../constants/locales";

export const handleGetLanguages = controller(async (_req, res) => {
  res.json(SUPPORTED_LANGUAGES);
});
