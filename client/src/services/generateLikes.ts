import seedrandom from "seedrandom";

export function generateLikes(avgLikes: number, songId: number): number {
  const rng = seedrandom(songId.toString());
  const base = Math.floor(avgLikes);
  const fraction = avgLikes - base;
  return rng.quick() < fraction ? base + 1 : base;
}
