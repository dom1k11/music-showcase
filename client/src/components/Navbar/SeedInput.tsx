const SeedInput = ({ seed, setSeed }) => {
  return (
    <div>
      <label htmlFor="seed">Seed</label>
      <input
        id="seed"
        className="form-control form-control-sm"
        placeholder="Seed"
        value={seed}
        onChange={(e) => setSeed(Number(e.target.value) || 0)}
      />
    </div>
  );
};
export default SeedInput;
