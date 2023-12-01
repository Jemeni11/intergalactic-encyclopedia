/**
 * This function takes a url and returns it as a route
 * e.g. "https://swapi.py4e.com/api/people/1/" -> "people/1"
 * @param url The url to convert to a route
 * @returns The route
 */
export default function URLtoRoute(url: string) {
  const urlArray = url.split("/");
  let route = "";
  if (url.endsWith("/")) {
    route = `${urlArray[urlArray.length - 3]}/${urlArray[urlArray.length - 2]}`;
  } else {
    route = `${urlArray[urlArray.length - 2]}/${urlArray[urlArray.length - 1]}`;
  }

  // TODO: The numbers are the indexes + 1 but verify this
  const number_slug = +route.split("/")[1] - 1;
  route = `${route.split("/")[0]}/${number_slug}`;

  return route;
}

/**
 * This function takes a url and returns it as a slug
 * e.g. "https://swapi.py4e.com/api/people/1/" -> "1"
 * @param url The url to convert to a slug
 * @returns The slug
 */
export function getSlug(url: string) {
  const urlArray = url.split("/");
  let route = "";
  if (url.endsWith("/")) {
    route = `${urlArray[urlArray.length - 3]}/${urlArray[urlArray.length - 2]}`;
  }
  route = `${urlArray[urlArray.length - 2]}/${urlArray[urlArray.length - 1]}`;

  return +route.split("/")[1] - 1;
}
