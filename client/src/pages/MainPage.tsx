import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import SongTable from "../components/SongTable/SongTable";


const MainPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <SongTable></SongTable>
    </>
  );
};

export default MainPage;
