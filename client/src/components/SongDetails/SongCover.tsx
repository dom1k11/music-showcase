import "./SongCover.css";

type SongCoverProps = {
  title: string;
  artist: string;
  coverUrl: string;
  size?: number;
};

export default function SongCover({ title, artist, coverUrl, size = 300 }: SongCoverProps) {
  return (
    <div className="song-cover" style={{ width: size, height: size }}>
      <img
        src={coverUrl}
        alt={`${title} cover`}
        className="song-cover-image"
      />
      <div className="song-cover-overlay">
        <div className="song-cover-title">{title}</div>
        <div className="song-cover-artist">{artist}</div>
      </div>
    </div>
  );
}
