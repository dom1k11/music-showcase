import cover from "../../assets/cover.png";
import sound from "../../assets/sound.mp3";

import "./SongDetails.css";
type SongDetailsProps = {
  song: {
    id: number;
    title: string;
    artist: string;
    album: string;
    genre: string;
    details: string;
  };
};

export default function SongDetails({ song }: SongDetailsProps) {
  return (
    <div className="song-details">
      <div className="song-details-left">
        <img src={cover} alt={`${song.album} cover`} className="song-cover" />
      </div>
      <div className="song-details-right">
        <div className="song-title-row">
          <h1>{song.title}</h1>
          <audio controls>
            <source src={sound} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        <p>
          from <b>{song.album}</b> by <b>{song.artist}</b>
        </p>
        <p>Apple Records, 2019</p>
        <p>
          <i>Lyrics</i>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
    </div>
  );
}
