import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

import { loadCountries } from './countries/countriesActions';
import configureStore from './store/configureStore';
import CountriesSelectorContainer from './countries/countriesSelectorContainer';
import CountryDataTableContainer from './data/countryDataTableContainer';
import './sass/styles.scss';

require('es6-promise/auto');
require('isomorphic-fetch');
require('font-awesome/css/font-awesome.css');

const store = configureStore();

store.dispatch(loadCountries());

ReactDOM.render(
  <Provider store={store}>
    <div className="container-fluid">
      <div className="row">
        <CountriesSelectorContainer />
        <CountryDataTableContainer />
      </div>
    </div>
  </Provider>,
  document.getElementById('app'),
);
