import { controller } from "../utils/controllerWrapper";
import { generateSongs } from "../services/songDataGenerator";

export const handleGenerateData = controller(async (req, res) => {
  const { seed, count } = req.body;
  const songs = generateSongs(Number(seed), Number(count));
  res.json(songs);
});
