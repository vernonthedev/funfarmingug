/**
 * Format a number as USD currency string.
 *
 * @example formatCurrency(12.5) // "$12.50"
 */
export function formatCurrency(n: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);
}
