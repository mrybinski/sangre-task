import { combineReducers } from 'redux';
import countriesReducer, { createDefaultCountriesState } from '../countries/countriesReducer';

const rootReducer = combineReducers({
  countries: countriesReducer,
});

export default rootReducer;

export const defaultState = {
  countries: createDefaultCountriesState(),
};
