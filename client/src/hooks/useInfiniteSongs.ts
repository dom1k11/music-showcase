import { useEffect, useState } from "react";
import { useSongs } from "./useSongs";
import type { Song } from "../types/song";

export function useInfiniteSongs(seed: number, avgLikes: number, lang: string) {
  const [page, setPage] = useState(1);
  const [allSongs, setAllSongs] = useState<Song[]>([]);
  const { songs, loading, error } = useSongs(seed, avgLikes, lang, page);

  useEffect(() => {
    setAllSongs([]);
    setPage(1);
  }, [seed, lang]);

  useEffect(() => {
    if (songs.length) setAllSongs((prev) => [...prev, ...songs]);
  }, [songs]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { allSongs, loading, error, setPage };
}
