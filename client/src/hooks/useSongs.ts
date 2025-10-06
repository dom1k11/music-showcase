import { useEffect, useState } from "react";
import { generate } from "../services/songDataGenerator";
import { generateLikes } from "../services/generateLikes";
import type { Song } from "../types/song";

export function useSongs(
  seed: number,
  avgLikes: number,
  lang: string,
  page: number
) {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    generate(seed, 5, lang, page)
      .then((data) => setSongs(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [seed, lang, page]);

  useEffect(() => {
    setSongs((prev) =>
      prev.map((song) => {
        const newLikes = generateLikes(avgLikes, song.id);
        return song.likes === newLikes ? song : { ...song, likes: newLikes };
      })
    );
  }, [avgLikes, seed]);

  return { songs, loading, error, setSongs };
}
