import seedrandom from "seedrandom";

type Note = { time: number; note: string; duration: number };
type Song = { bpm: number; notes: Note[] };

const SCALE = ["C4", "D4", "E4", "F4", "G4", "A4", "B4"];

export function generateAudio(seed: string): Song {
  const rng = seedrandom(seed);

  const bpm = Math.floor(rng() * 60 + 80);
  const length = 16;

  const notes: Note[] = [];
  let time = 0;

  for (let i = 0; i < length; i++) {
    const note = SCALE[Math.floor(rng() * SCALE.length)];
    const duration = [0.25, 0.5, 1][Math.floor(rng() * 3)];
    notes.push({ time, note, duration });
    time += duration;
  }

  return { bpm, notes };
}
