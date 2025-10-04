const RangeInput = ({ avgLikes, setAvgLikes }) => {
  return (
    <div>
      <label htmlFor="likesRange">Likes: {avgLikes}</label>
      <input
        id="likesRange"
        type="range"
        className="form-range"
        min="0"
        max="10"
        step="0.1"
        value={avgLikes}
        onChange={(e) => setAvgLikes(parseFloat(e.target.value))}
      />
    </div>
  );
  
};

export default RangeInput;
