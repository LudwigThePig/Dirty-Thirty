export function isDebug() {
  const url = window.location.href;
  return url.includes('localhost');
}