export function isDigit(c: string): boolean {
  const code = c.charCodeAt(0);
  return code >= 48 && code <= 57;
}
