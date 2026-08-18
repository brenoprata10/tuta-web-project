export const isValidURL = (url?: string) => {
  if (!url || !/^https?:\/\//i.test(url)) {
    return false;
  }

  try {
    const parsed = new URL(url);

    return (
      ["http:", "https:"].includes(parsed.protocol) &&
      parsed.hostname.length > 0
    );
  } catch {
    return false;
  }
};
