import * as Tone from "tone";

export async function playSong(songData: { bpm: number; notes: any[] }) {
  await Tone.start();
  Tone.Transport.stop();
  Tone.Transport.cancel();

  Tone.Transport.bpm.value = songData.bpm;
  const synth = new Tone.Synth().toDestination();

  songData.notes.forEach((n) => {
    synth.triggerAttackRelease(n.note, n.duration, n.time);
  });

  Tone.Transport.start();
}

export function stopSong() {
  Tone.Transport.stop();
  Tone.Transport.cancel();
}
