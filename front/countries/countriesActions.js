import fetcher from '../utility/fetcher';

export const REQUEST_COUNTRIES = 'REQUEST_COUNTRIES';
export const RECEIVE_COUNTRIES = 'RECEIVE_COUNTRIES';
export const SELECT_COUNTRY = 'SELECT_COUNTRY';
export const DESELECT_COUNTRY = 'DESELECT_COUNTRY';
export const FILTER_COUNTRY = 'FILTER_COUNTRY';

export function selectCountry(countryName) {
  return { type: SELECT_COUNTRY, country: countryName };
}

export function deselectCountry(countryName) {
  return { type: DESELECT_COUNTRY, country: countryName };
}

export function requestCountries() {
  return { type: REQUEST_COUNTRIES };
}

export function receiveCountries(result) {
  return { type: RECEIVE_COUNTRIES, result };
}

export function filterCountry(filterText) {
  return { type: FILTER_COUNTRY, filterText };
}

export function loadCountries() {
  return (dispatch) => {
    dispatch(requestCountries());
    fetcher('http://localhost:3000/countries')
      .then(response => response.json())
      .then(json =>
        dispatch(receiveCountries(json)));
  };
}
