import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import SongTable from "../components/SongTable/SongTable";
import { useState } from "react";

const MainPage = () => {
  const [seed, setSeed] = useState(123);
  const [avgLikes, setAvgLikes] = useState(5);
  const [lang, setLang] = useState("en-US");

  return (
    <>
      <Header />
      <Navbar
        seed={seed}
        setSeed={setSeed}
        avgLikes={avgLikes}
        setAvgLikes={setAvgLikes}
        lang={lang}
        setLang={setLang}
      />
      <SongTable seed={seed} avgLikes={avgLikes} lang={lang} />{" "}
    </>
  );
};

export default MainPage;
