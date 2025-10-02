import SongRow from "../SongRow/SongRow";
import "./SongTable.css";

const SongTable = () => {
  const songs = [
    {
      id: 41,
      title: "All Elfs Go",
      artist: "Elton Smith, MD",
      album: "Oh, My God",
      genre: "House",
      details: "Extra info about this song...",
    },
    {
      id: 42,
      title: "Right On",
      artist: "Ella Fiz And Cockroaches",
      album: "Single",
      genre: "Folk",
      details: "Lyrics, release date, etc.",
    },
    {
      id: 43,
      title: "Whisper!",
      artist: "Albert Norton Stone",
      album: "Single",
      genre: "Heavy Metal",
      details: "This is a heavy track.",
    },
  ];

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
