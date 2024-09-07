export function getQueryParam(param) {
  const url = new URL(window.location);
  return url.searchParams.get(param);
}
