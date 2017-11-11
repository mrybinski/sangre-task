import { combineReducers } from 'redux';
import countriesReducer, { createDefaultCountriesState } from '../countries/countriesReducer';
import dataReducer, { createDefaultDataState } from '../data/dataReducer';

const rootReducer = combineReducers({
  countries: countriesReducer,
  data: dataReducer,
});

export default rootReducer;

export const defaultState = {
  countries: createDefaultCountriesState(),
  data: createDefaultDataState(),
};
