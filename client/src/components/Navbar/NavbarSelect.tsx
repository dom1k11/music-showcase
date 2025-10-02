const NavbarSelect = () => {
  return (
    <div>
      <label htmlFor="language">Language</label>
      <select id="language" className="form-select form-select-sm">
        <option disabled>Select Language</option>
        <option value="1">English</option>
        <option value="2">Russian</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
};
export default NavbarSelect;
