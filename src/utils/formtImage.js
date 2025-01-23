export const formattedImageUrl = (url) =>
  url ? (url.startsWith("/") ? `http://localhost:1337${url}` : url) : "";
