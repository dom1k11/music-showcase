import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import SongTable from "../components/SongTable/SongTable";
import { useState } from "react";

const MainPage = () => {
  const [seed, setSeed] = useState(123);
  const [avgLikes, setAvgLikes] = useState(5);

  return (
    <>
      <Header />
      <Navbar
        seed={seed}
        setSeed={setSeed}
        avgLikes={avgLikes}
        setAvgLikes={setAvgLikes}
      />
      <SongTable seed={seed} avgLikes={avgLikes} />
    </>
  );
};

export default MainPage;
