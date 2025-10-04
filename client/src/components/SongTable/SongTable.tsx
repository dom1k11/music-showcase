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
  const [page, setPage] = useState(1);
  useEffect(() => {
    setPage(1);
  }, [seed, lang]);

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

      {/* Pagination */}
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          ← Prev
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage(page + 1)}>Next →</button>
      </div>
    </div>
  );
};

export default SongTable;
