
import NavbarSelect from "./NavbarSelect";
import RangeInput from "./RangeInput";
import SeedInput from "./SeedInput";
import './Navbar.css'



const Navbar = () => {
  return (
    <nav>
      <div className="navbar-group">
        <NavbarSelect />
        <SeedInput />
        <RangeInput />
      </div>
    </nav>
  );
};

export default Navbar;
