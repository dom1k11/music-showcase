import { useState, useEffect } from "react";
import SongRow from "../SongRow/SongRow";
import { useSongs } from "../../hooks/useSongs";
import "./SongTable.css";

type SongTableProps = {
  seed: number;
  avgLikes: number;
  lang: string;
};

const SongTable = ({ seed, avgLikes, lang }: SongTableProps) => {
  const [page, setPage] = useState(1);
  const { songs, loading, error } = useSongs(seed, avgLikes, lang, page);

  useEffect(() => {
    setPage(1);
  }, [seed, lang]);

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
