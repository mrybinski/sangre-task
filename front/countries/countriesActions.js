import fetcher from '../utility/fetcher';
import showError from '../utility/errorHandler';

export const REQUEST_COUNTRIES = 'REQUEST_COUNTRIES';
export const RECEIVE_COUNTRIES = 'RECEIVE_COUNTRIES';
export const ERROR_COUNTRIES = 'ERROR_COUNTRIES';
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

export function countriesLoadError() {
  return { type: ERROR_COUNTRIES };
}

export function filterCountry(filterText) {
  return { type: FILTER_COUNTRY, filterText };
}

export function loadCountries() {
  return (dispatch) => {
    dispatch(requestCountries());
    return fetcher('countries')
      .then(json =>
        dispatch(receiveCountries(json)))
      .catch((error) => {
        dispatch(countriesLoadError());
        showError(error);
      });
  };
}
