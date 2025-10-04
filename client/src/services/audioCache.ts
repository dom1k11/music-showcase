const cache = new Map<string, string>();

export const getCachedAudio = (key: string) => cache.get(key);
export const setCachedAudio = (key: string, url: string) => cache.set(key, url);
