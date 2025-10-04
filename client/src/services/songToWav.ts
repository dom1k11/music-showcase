import * as Tone from "tone";
import toWav from "audiobuffer-to-wav";

export async function songToWavUrl(songData: { bpm: number; notes: any[] }) {
  const totalTime = songData.notes[songData.notes.length - 1].time + 2;

  const buffer = await Tone.Offline(() => {
    const synth = new Tone.Synth().toDestination();
    Tone.Transport.bpm.value = songData.bpm;

    songData.notes.forEach((n) => {
      synth.triggerAttackRelease(n.note, n.duration, n.time);
    });
  }, totalTime);

  const wav = toWav(buffer);
  const blob = new Blob([wav], { type: "audio/wav" });
  return URL.createObjectURL(blob);
}
