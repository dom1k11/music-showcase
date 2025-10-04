import { useEffect, useState } from "react";
import SongRow from "../SongRow/SongRow";
import { generate } from "../../services/songDataGenerator";
import { generateLikes } from "../../services/generateLikes";
import "./SongTable.css";
import type { Song } from "../../types/song";

type SongTableProps = {
  seed: number;
  avgLikes: number;
  lang: string;
};

const SongTable = ({ seed, avgLikes, lang }: SongTableProps) => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    generate(seed, 10, lang)
      .then((data) => setSongs(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [seed, lang]);

  useEffect(() => {
    setSongs((prev) =>
      prev.map((song) => {
        const newLikes = generateLikes(avgLikes, song.id);
        if (song.likes === newLikes) return song;
        return { ...song, likes: newLikes };
      })
    );
  }, [avgLikes, seed]);

  if (loading) return <p>Loading songs...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="song-table-container">
      <table className="song-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Song</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <SongRow key={song.id} song={song} seed={seed} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongTable;
