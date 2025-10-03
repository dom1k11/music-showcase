import { controller } from "../utils/controllerWrapper.js";
import { generateAudio } from "../services/songAudioGenerator.js";

export const handleGenerateAudio = controller(async (req, res) => {
  const { seed } = req.body;

  if (!seed) {
    res.status(400).json({ error: "Seed is required" });
    return
  }

  const song = generateAudio(seed);
  res.json(song);
});
