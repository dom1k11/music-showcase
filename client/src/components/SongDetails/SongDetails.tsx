import SongCover from "./SongCover";
import sound from "../../assets/sound.mp3";
import "./SongDetails.css";

export default function SongDetails({ song }: { song: any }) {
  return (
    <div className="song-details">
      <div className="song-details-left">
        <SongCover
          title={song.title}
          artist={song.artist}
          coverUrl={song.coverUrl}
          size={175}
        />
      </div>

      <div className="song-details-right">
        <div className="song-title-row">
          <h1>{song.title}</h1>
          <audio controls>
            <source src={sound} type="audio/mpeg" />
          </audio>
        </div>
        <p>
          from <b>{song.album}</b> by <b>{song.artist}</b>
        </p>
        <p>Apple Records, 2019</p>
        <p>
          <i>Lyrics</i>
        </p>
        <p>{song.details}</p>
      </div>
    </div>
  );
}
