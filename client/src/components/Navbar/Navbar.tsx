import NavbarSelect from "./NavbarSelect";
import RangeInput from "./RangeInput";
import SeedInput from "./SeedInput";
import "./Navbar.css";

const Navbar = ({ seed, setSeed, avgLikes, setAvgLikes }) => {
  return (
    <nav>
      <div className="navbar-group">
        <NavbarSelect />
        <SeedInput seed={seed} setSeed={setSeed} />
        <RangeInput avgLikes={avgLikes} setAvgLikes={setAvgLikes} />
      </div>
    </nav>
  );
};

export default Navbar;
