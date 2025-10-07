import { useEffect, useState } from "react";
import { fetchLanguages } from "../../services/fetchLanguages";

const NavbarSelect = ({ lang, setLang }) => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    fetchLanguages().then(setLanguages).catch(console.error);
  }, []);

  return (
    <div>
      <label htmlFor="language">Language</label>
      <select
        id="language"
        className="form-select form-select-sm"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
      >
        {languages.map((l) => (
          <option key={l.code} value={l.code}>
            {l.flag} {l.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NavbarSelect;
