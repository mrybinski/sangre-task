import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { loadCountries } from './countries/countriesActions';
import configureStore from './store/configureStore';
import CountriesSelectorContainer from './countries/countriesSelectorContainer';
import CountryDataTableContainer from './data/countryDataTableContainer';
import './sass/styles.scss';

require('es6-promise/auto');
require('isomorphic-fetch');


const store = configureStore();

store.dispatch(loadCountries());

ReactDOM.render(
  <Provider store={store}>
    <div>
      <CountriesSelectorContainer />
      <CountryDataTableContainer />
    </div>
  </Provider>,
  document.getElementById('app'),
);
