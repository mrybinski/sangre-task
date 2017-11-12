export function contains(country, dataState = { cache: { } }) {
  return Object.prototype.hasOwnProperty.call(dataState.cache, country);
}

export function save(country = '', countryData = { }, dataState = { cache: { } }) {
  return Object.assign({}, dataState.cache, { [country]: countryData });
}

export function get(country = '', dataState = { cache: { } }) {
  return dataState.cache[country];
}
