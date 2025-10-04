export function getSongSeed(baseSeed: string | number, songId: number) {
  return `${baseSeed}-${songId}`;
}
