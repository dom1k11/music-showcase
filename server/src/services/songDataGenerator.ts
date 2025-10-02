import { faker } from "@faker-js/faker";

export type Song = {
  id: number;
  title: string;
  artist: string;
  album: string;
  genre: string;
  details: string;
};

export function generateSongs(seed: number, count: number): Song[] {
  faker.seed(seed);

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: faker.music.songName(),
    artist: faker.person.fullName(),
    album: Math.random() > 0.3 ? faker.word.noun() : "Single",
    genre: faker.music.genre(),
    details: faker.lorem.sentence(),
  }));
}
