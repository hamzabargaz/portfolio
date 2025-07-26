import {
  parse,
  format,
  formatDistanceToNow,
  isValid,
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  parseISO,
} from "date-fns";

/**
 * Parse a date string in DD-MM-YYYY format
 * @param dateString - The date string to parse
 * @returns Parsed Date object or current date if parsing fails
 */
export function parseDate(dateString: string): Date {
  if (!dateString) return new Date();

  try {
    // First try to parse DD-MM-YYYY format
    const parsedDate = parse(dateString, "dd-MM-yyyy", new Date());
    if (isValid(parsedDate)) {
      return parsedDate;
    }

    // Fallback to ISO string parsing
    const isoDate = parseISO(dateString);
    if (isValid(isoDate)) {
      return isoDate;
    }

    // Last fallback to Date constructor
    const constructedDate = new Date(dateString);
    if (isValid(constructedDate)) {
      return constructedDate;
    }

    // If all parsing fails, return current date
    return new Date();
  } catch {
    return new Date();
  }
}

/**
 * Format a date for display with relative time
 * @param dateString - The date string to format
 * @param includeRelative - Whether to include relative time (e.g., "2 years ago")
 * @returns Formatted date string
 */
export function formatDate(
  dateString: string,
  includeRelative = false
): string {
  const date = parseDate(dateString);
  const now = new Date();

  // Format the full date
  const fullDate = format(date, "MMMM d, yyyy");

  if (!includeRelative) {
    return fullDate;
  }

  // Calculate relative time more accurately using date-fns
  const yearsAgo = differenceInYears(now, date);
  const monthsAgo = differenceInMonths(now, date);
  const daysAgo = differenceInDays(now, date);

  let relativeTime = "";

  if (yearsAgo > 0) {
    relativeTime = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    relativeTime = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    relativeTime = `${daysAgo}d ago`;
  } else {
    relativeTime = "Today";
  }

  return `${fullDate} (${relativeTime})`;
}

/**
 * Format a date to ISO string for metadata
 * @param dateString - The date string to format
 * @returns ISO string representation of the date
 */
export function formatDateToISO(dateString: string): string {
  const date = parseDate(dateString);
  return date.toISOString();
}

/**
 * Format a date for sitemap (YYYY-MM-DD format)
 * @param dateString - The date string to format
 * @returns Date formatted as YYYY-MM-DD
 */
export function formatDateForSitemap(dateString: string): string {
  const date = parseDate(dateString);
  return format(date, "yyyy-MM-dd");
}

/**
 * Get current date formatted for sitemap
 * @returns Current date formatted as YYYY-MM-DD
 */
export function getCurrentDateForSitemap(): string {
  return format(new Date(), "yyyy-MM-dd");
}

/**
 * Format relative time using date-fns (e.g., "2 years ago", "3 months ago")
 * @param dateString - The date string
 * @returns Formatted relative time
 */
export function formatRelativeTime(dateString: string): string {
  const date = parseDate(dateString);
  return formatDistanceToNow(date, { addSuffix: true });
}
