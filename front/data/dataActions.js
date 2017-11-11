import fetcher from '../utility/fetcher';
import { contains } from './dataCache';

export const REQUEST_COUNTRY_DATA = 'REQUEST_COUNTRY_DATA';
export const RECEIVE_COUNTRY_DATA = 'RECEIVE_COUNTRY_DATA';
export const SHOW_COUNTRY = 'SHOW_COUNTRY';
export const HIDE_COUNTRY = 'HIDE_COUNTRY';

export function requestCountryData(country) {
  return { type: REQUEST_COUNTRY_DATA, country };
}

export function receiveCountryData(country, countryData) {
  return { type: RECEIVE_COUNTRY_DATA, country, countryData };
}

export function showCountry(country) {
  return (dispatch, getState) => {
    const dataState = getState().data;
    if (contains(country, dataState)) {
      dispatch({ type: SHOW_COUNTRY, country });
    } else {
      dispatch(requestCountryData(country));
      const countryData = {};
      const countryParameter = encodeURIComponent(country);
      fetcher(`http://localhost:3000/population/${countryParameter}`)
        .then(response => response.json())
        .then((json) => {
          countryData.population = json;
          return fetcher(`http://localhost:3000/expectancy/${countryParameter}`);
        })
        .then(response => response.json())
        .then((json) => {
          countryData.expectancy = json;
          dispatch(receiveCountryData(country, countryData));
          dispatch({ type: SHOW_COUNTRY, country });
        });
    }
  };
}