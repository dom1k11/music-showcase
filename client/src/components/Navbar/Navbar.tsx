import NavbarSelect from "./NavbarSelect";
import RangeInput from "./RangeInput";
import SeedInput from "./SeedInput";
import "./Navbar.css";

const Navbar = ({ seed, setSeed }) => {
  return (  
    <nav>
      <div className="navbar-group">
        <NavbarSelect />
        <SeedInput seed={seed} setSeed={setSeed} />
        <RangeInput />
      </div>
    </nav>
  );
};

export default Navbar;
