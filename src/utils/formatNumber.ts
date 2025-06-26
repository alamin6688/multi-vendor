// Utility to format numbers for stats and cards
export function formatNumber(num: number, isRating: boolean = false): string {
  if (isRating) {
    return num.toFixed(1);
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + "K";
  }
  return Math.floor(num).toString();
}
