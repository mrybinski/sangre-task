import fetcher from '../utility/fetcher';
import { contains } from './dataCache';
import showError from '../utility/errorHandler';
import endpoints from '../api';

export const REQUEST_COUNTRY_DATA = 'REQUEST_COUNTRY_DATA';
export const RECEIVE_COUNTRY_DATA = 'RECEIVE_COUNTRY_DATA';
export const COUNTRY_DATA_ERROR = 'COUNTRY_DATA_ERROR';
export const SHOW_COUNTRY = 'SHOW_COUNTRY';
export const HIDE_COUNTRY = 'HIDE_COUNTRY';

export function requestCountryData(country) {
  return { type: REQUEST_COUNTRY_DATA, country };
}

export function receiveCountryData(country, countryData) {
  return { type: RECEIVE_COUNTRY_DATA, country, countryData };
}

export function countryDataError(country) {
  return { type: COUNTRY_DATA_ERROR, country };
}

export function hideCountry(country) {
  return { type: HIDE_COUNTRY, country };
}

export function showCountry(country) {
  return (dispatch, getState) => {
    const dataState = getState().data;
    if (contains(country, dataState)) {
      return dispatch({ type: SHOW_COUNTRY, country });
    }

    dispatch(requestCountryData(country));
    const countryParameter = encodeURIComponent(country);
    return fetcher(`${endpoints.allData}/${countryParameter}`)
      .then((json) => {
        dispatch(receiveCountryData(country, json));
        dispatch({ type: SHOW_COUNTRY, country });
      })
      .catch((error) => {
        dispatch(countryDataError(country));
        showError(error);
      });
  };
}
