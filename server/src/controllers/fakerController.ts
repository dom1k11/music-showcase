import { controller } from "../utils/controllerWrapper";
import { generateSongs } from "../services/songDataGenerator";

export const handleGenerateData = controller(async (req, res) => {
  const { seed, count, lang, page } = req.body;

  const songs = generateSongs(
    Number(seed),
    Number(count),
    lang || "en-US",
    Number(page) || 1
  );

  res.json(songs);
});
