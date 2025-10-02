import { useState } from "react";
import SongDetails from "../SongDetails/SongDetails";

type Song = {
  id: number;
  title: string;
  artist: string;
  album: string;
  genre: string;
  details: string;
};

const SongRow = ({ song }: { song: Song }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <tr
        className={`song-row ${expanded ? "expanded" : ""}`}
        onClick={() => setExpanded(!expanded)}
      >
        <td>
          <b>{song.id}</b>
        </td>
        <td>{song.title}</td>
        <td>{song.artist}</td>
        <td>{song.album}</td>
        <td>{song.genre}</td>
      </tr>

      {expanded && (
        <tr className="song-row-expanded">
          <td colSpan={5}>
            <div className="song-row-details">
              <SongDetails song={song} />
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default SongRow;
