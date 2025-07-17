/**
 * Utility functions for the Be More Free website
 */

/**
 * Normalize WordPress URI to clean slug for routing
 * @param {string} uri - WordPress URI like "/blog-post/" 
 * @returns {string} - Clean slug like "blog-post"
 */
export function normalizeSlug(uri) {
  return uri.replace(/^\/|\/$/g, '');
}

/**
 * Format date for display
 * @param {string} dateString - ISO date string
 * @returns {string} - Formatted date like "January 15, 2024"
 */
export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long', 
    day: 'numeric'
  });
}

/**
 * Calculate reading time estimate
 * @param {string} content - HTML content string
 * @returns {number} - Estimated reading time in minutes
 */
export function calculateReadingTime(content) {
  // Remove HTML tags and count words
  const text = content.replace(/<[^>]*>/g, '');
  const wordCount = text.split(/\s+/).length;
  // Average reading speed is 200 words per minute
  return Math.ceil(wordCount / 200);
}

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} length - Maximum length
 * @returns {string} - Truncated text with ellipsis
 */
export function truncateText(text, length = 160) {
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + '...';
}
