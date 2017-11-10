import { REQUEST_COUNTRIES, RECEIVE_COUNTRIES, SELECT_COUNTRY, DESELECT_COUNTRY } from './countriesActions';

export function createDefaultCountriesState() {
  return {
    loading: true,
    all: [],
    selected: [],
  };
}

export default function countriesReducer(state = {}, action) {
  switch (action.type) {
    case REQUEST_COUNTRIES:
      return Object.assign({}, state, {
        loading: true,
      });
    case RECEIVE_COUNTRIES:
      if (action.result && action.result.countries) {
        return Object.assign({}, state, {
          loading: false,
          all: action.result.countries,
        });
      }
      return state;
    case SELECT_COUNTRY:
      return Object.assign({}, state, {
        selected: state.selected.concat(action.country),
      });
    case DESELECT_COUNTRY:
      return Object.assign({}, state, {
        selected: state.selected.filter(country => country !== action.country),
      });
    default:
      return state;
  }
}
