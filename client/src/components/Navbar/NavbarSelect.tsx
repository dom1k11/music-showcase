const NavbarSelect = ({ lang, setLang }) => {
  return (
    <div>
      <label htmlFor="language">Language</label>
      <select
        id="language"
        className="form-select form-select-sm"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
      >
        <option value="en-US">English US</option>
        <option value="ru-RU">Русский RU</option>
        <option value="zh-CN">中文 cn</option>
      </select>
    </div>
  );
};

export default NavbarSelect;
