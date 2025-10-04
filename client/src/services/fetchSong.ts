import { API_URL } from "../constants/api_url";

export async function fetchSong(seed: string | number) {
  const res = await fetch(`${API_URL}/audio/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ seed: String(seed) }),
  });

  if (!res.ok) throw new Error("Failed to fetch song");
  return res.json();
}
