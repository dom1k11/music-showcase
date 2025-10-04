export function generateRandomSeed(): string {
  const seed = crypto.getRandomValues(new BigUint64Array(1))[0];
  return seed.toString(); 
}
