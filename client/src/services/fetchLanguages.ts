import { API_URL } from "../constants/api_url";

export async function fetchLanguages() {
  const res = await fetch(`${API_URL}/languages`);
  if (!res.ok) throw new Error("Failed to load languages");
  return res.json();
}
