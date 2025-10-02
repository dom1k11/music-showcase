import { useEffect, useState } from "react";
import SongRow from "../SongRow/SongRow";
import { generate } from "../../services/songDataGenerator";
import "./SongTable.css";

type Song = {
  id: number;
  title: string;
  artist: string;
  album: string;
  genre: string;
  details: string;
  coverUrl: string;
};

const SongTable = ({seed}) => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    generate(seed, 10)
      .then((data: Song[]) => {
        setSongs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [seed]);

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
            <SongRow key={song.id} song={song} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongTable;
