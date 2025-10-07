import NavbarSelect from "./NavbarSelect";
import RangeInput from "./RangeInput";
import SeedInput from "./SeedInput";
import ViewToggle from "./ViewToggle/ViewToggle";
import "./Navbar.css";

const Navbar = ({
  seed,
  setSeed,
  avgLikes,
  setAvgLikes,
  lang,
  setLang,
  viewMode,
  setViewMode,
}) => {
  return (
    <nav>
      <div className="navbar-group">
        <NavbarSelect lang={lang} setLang={setLang} />
        <SeedInput seed={seed} setSeed={setSeed} />
        <RangeInput avgLikes={avgLikes} setAvgLikes={setAvgLikes} />
        <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
      </div>
    </nav>
  );
};

export default Navbar;
