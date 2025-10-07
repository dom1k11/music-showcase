import { Faker } from "@faker-js/faker";
import { LOCALES } from "../constants/locales";
import type { Song } from "../types/song";

export function generateSongs(
  seed: number,
  count: number,
  lang = "en-US",
  page = 1
): Song[] {
  const locale = LOCALES[lang] || LOCALES["en-US"];
  const faker = new Faker({ locale: [locale, LOCALES["en-US"]] });

  const finalSeed = seed + page * 1000;
  faker.seed(finalSeed);

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1 + (page - 1) * count,
    title: faker.commerce.productName(),
    artist: faker.person.fullName(),
    album:
      faker.helpers.maybe(() => faker.commerce.product(), { probability: 0.7 }) ??
      "Single",
    genre: faker.commerce.department(),
    details: faker.commerce.productDescription(),
    coverUrl: `https://picsum.photos/seed/${finalSeed}-${lang}-${i}/300/300`,
  }));
}
