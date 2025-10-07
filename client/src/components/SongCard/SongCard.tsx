import "./SongCard.css";
import type { Song } from "../../types/song";

type SongCardProps = {
  song: Song;
};

const SongCard = ({ song }: SongCardProps) => {
  return (
    <div className="song-card">
      <img src={song.coverUrl} alt={song.title} className="song-card-img" />
      <div className="song-card-info">
        <h3>{song.title}</h3>
        <p>{song.genre}</p>
      </div>
    </div>
  );
};

export default SongCard;
