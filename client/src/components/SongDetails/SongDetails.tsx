import { useEffect, useState } from "react";
import * as Tone from "tone";
import SongCover from "./SongCover";
import "./SongDetails.css";
import { fetchSong } from "../../services/fetchSong";
import { songToWavUrl } from "../../services/songToWav";
import { getCachedAudio, setCachedAudio } from "../../services/audioCache";
import { getSongSeed } from "../../services/getSongSeed";
import type { Song } from "../../types/song";

export default function SongDetails({
  song,
  seed,
  likes,
}: {
  song: Song;
  seed: number;
  likes: number;
}) {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generate = async () => {
      const songSeed = getSongSeed(seed, song.id);
      const cached = getCachedAudio(songSeed);
      if (cached) {
        setAudioUrl(cached);
        setLoading(false);
        return;
      }

      await Tone.start();
      const songData = await fetchSong(songSeed);
      const url = await songToWavUrl(songData);
      setCachedAudio(songSeed, url);
      setAudioUrl(url);
      setLoading(false);
    };

    generate();
  }, [seed, song.id]);

  return (
    <div className="song-details">
      <div className="song-details-left">
        <SongCover
          title={song.title}
          artist={song.artist}
          coverUrl={song.coverUrl}
          size={175}
        />
        <p className="song-likes">❤️ Likes: {likes}</p>
      </div>

      <div className="song-details-right">
        <div className="song-title-row">
          <h1>{song.title}</h1>
          {loading ? (
            <span>Generating...</span>
          ) : (
            audioUrl && <audio controls src={audioUrl} />
          )}
        </div>
        <p>
          from <b>{song.album}</b> by <b>{song.artist}</b>
        </p>
        <p>
          <i>{song.details}</i>
        </p>
      </div>
    </div>
  );
}
