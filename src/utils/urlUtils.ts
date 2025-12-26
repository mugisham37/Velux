/**
 * Normalizes protocol-relative URLs to HTTPS URLs
 * @param url - The URL to normalize (can be protocol-relative or absolute)
 * @returns Normalized HTTPS URL
 */
export function normalizeImageUrl(url: string): string {
  if (url.startsWith('//')) {
    return `https:${url}`;
  }
  return url;
}

/**
 * Batch normalize multiple URLs
 * @param urls - Array of URLs to normalize
 * @returns Array of normalized URLs
 */
export function normalizeImageUrls(urls: string[]): string[] {
  return urls.map(normalizeImageUrl);
}

