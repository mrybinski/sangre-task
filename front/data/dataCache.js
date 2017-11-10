export function contains(country, dataState = { cache: { } }) {
  return Object.prototype.hasOwnProperty.call(dataState.cache, country);
}

export function save(country, countryData, dataState = { cache: { } }) {
  dataState.cache[country] = countryData;
}

export function get(country, countryData, dataState) {
  return dataState.cache[country];
}
