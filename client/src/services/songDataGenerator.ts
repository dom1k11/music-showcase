import { API_URL } from "../constants/api_url";

export async function generate(
  seed: number,
  count: number,
  lang: string,
  page: number
) {
  const res = await fetch(`${API_URL}/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ seed, count, lang, page }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error || "failed generating data");
  }

  return res.json();
}
