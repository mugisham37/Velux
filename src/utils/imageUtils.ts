/**
 * Normalizes protocol-relative URLs to use HTTPS
 * @param url - The URL to normalize
 * @returns The normalized URL with HTTPS protocol
 */
export function normalizeImageUrl(url: string): string {
  if (url.startsWith('//')) {
    return `https:${url}`;
  }
  return url;
}

