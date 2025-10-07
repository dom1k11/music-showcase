import { useInfiniteSongs } from "../../hooks/useInfiniteSongs";
import SongCard from "../SongCard/SongCard";
import "./SongGallery.css";

type SongGalleryProps = {
  seed: number;
  avgLikes: number;
  lang: string;
};

const SongGallery = ({ seed, avgLikes, lang }: SongGalleryProps) => {
  const { allSongs, loading, error, setPage } = useInfiniteSongs(
    seed,
    avgLikes,
    lang
  );

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="song-gallery">
      {allSongs.map((song) => (
        <SongCard key={`${song.id}-${song.title}`} song={song} />
      ))}

      {loading && <p style={{ textAlign: "center" }}>Loading more songs...</p>}

      {!loading && (
        <button className="load-more-btn" onClick={() => setPage((p) => p + 1)}>
          Load more
        </button>
      )}
    </div>
  );
};

export default SongGallery;
