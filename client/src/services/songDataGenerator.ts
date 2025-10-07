import { API_URL } from "../constants/api_url";

export async function generate(
  seed: number,
  count: number,
  lang: string,
  page: number
) {
  const url = `${API_URL}/generate`;
  console.log("→ POST", url, { seed, count, lang, page });

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ seed, count, lang, page }),
  });

  console.log("Response status:", res.status);
  const text = await res.text();
  console.log("Raw response:", text);

  if (!res.ok) {
    let errorMessage = "failed generating data";
    try {
      const errorData = JSON.parse(text);
      errorMessage = errorData.error || errorMessage;
    } catch {}
    throw new Error(errorMessage);
  }

  try {
    return JSON.parse(text);
  } catch (err) {
    console.error("❌ Invalid JSON from server:", text);
    throw new Error("Invalid JSON received from server");
  }
}
