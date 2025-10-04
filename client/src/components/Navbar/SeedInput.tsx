import { generateRandomSeed } from "../../services/randomSeed";

const SeedInput = ({ seed, setSeed }) => {
  const handleRandom = () => {
    const newSeed = generateRandomSeed();
    setSeed(Number(newSeed));
  };

  return (
    <div>
      <label htmlFor="seed">Seed</label>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <input
          id="seed"
          className="form-control form-control-sm"
          placeholder="Seed"
          value={seed}
          onChange={(e) => setSeed(Number(e.target.value) || 0)}
          style={{ flex: 1 }}
        />
        <button
          type="button"
          className="btn btn-outline-secondary btn-sm"
          onClick={handleRandom}
        >
          🎲
        </button>
      </div>
    </div>
  );
};

export default SeedInput;
