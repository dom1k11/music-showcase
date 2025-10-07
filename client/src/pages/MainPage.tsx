import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import SongTable from "../components/SongTable/SongTable";
import SongGallery from "../components/SongGallery/SongGallery";
import { useState } from "react";

const MainPage = () => {
  const [seed, setSeed] = useState(123);
  const [avgLikes, setAvgLikes] = useState(5);
  const [lang, setLang] = useState("en-US");
  const [viewMode, setViewMode] = useState<"table" | "gallery">("table");

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
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      {viewMode === "table" ? (
        <SongTable seed={seed} avgLikes={avgLikes} lang={lang} />
      ) : (
        <SongGallery seed={seed} avgLikes={avgLikes} lang={lang} />
      )}
    </>
  );
};

export default MainPage;
