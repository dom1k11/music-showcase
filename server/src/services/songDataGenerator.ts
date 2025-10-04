import { Faker } from "@faker-js/faker";
import { LOCALES } from "../constants/locales";
import type { Song } from "../types/song";


export function generateSongs(
  seed: number,
  count: number,
  lang = "en-US"
): Song[] {
  const locale = LOCALES[lang] || LOCALES["en-US"];
  const faker = new Faker({ locale: [locale, LOCALES["en-US"]] });
  faker.seed(seed);

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: faker.commerce.productName(),
    artist: faker.person.fullName(),
    album: Math.random() > 0.3 ? faker.commerce.product() : "Single",
    genre: faker.commerce.department(),
    details: faker.commerce.productDescription(),
    coverUrl: `https://picsum.photos/seed/${seed}-${lang}-${i}/300/300`,
  }));
}
