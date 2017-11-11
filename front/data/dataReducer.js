import { SHOW_COUNTRY, HIDE_COUNTRY, RECEIVE_COUNTRY_DATA, REQUEST_COUNTRY_DATA } from './dataActions';
import { get, save } from './dataCache';

export function createDefaultDataState() {
  return {
    loading: false,
    cache: {},
    shownEntries: [],
  };
}

export default function dataReducer(state = {}, action) {
  switch (action.type) {
    case REQUEST_COUNTRY_DATA:
      return Object.assign({}, state, {
        loading: true,
      });
    case RECEIVE_COUNTRY_DATA:
      return Object.assign({}, state, {
        loading: false,
        cache: save(action.country, action.countryData, state),
      });
    case SHOW_COUNTRY: {
      const countryData = get(action.country, state);
      return Object.assign({}, state, {
        shownEntries: state.shownEntries.concat({
          country: action.country,
          data: countryData,
        }),
      });
    }
    case HIDE_COUNTRY:
      return Object.assign({}, state, {
        selected: state.shownEntries.filter(entry => entry.country !== action.country),
      });
    default:
      return state;
  }
}
