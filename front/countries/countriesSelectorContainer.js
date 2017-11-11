import { connect } from 'react-redux';
import CountriesSelector from './countriesSelector';
import { selectCountry, deselectCountry, filterCountry } from './countriesActions';
import { showCountry, hideCountry } from '../data/dataActions';

function mapStateToProps(state) {
  return {
    loading: state.countries.loading,
    data: state.countries.filtered,
    selected: state.countries.selected,
    filter: state.countries.filter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    select(country) {
      dispatch(selectCountry(country));
      dispatch(showCountry(country));
    },
    deselect(country) {
      dispatch(deselectCountry(country));
      dispatch(hideCountry(country));
    },
    filterCountry(filterText) {
      dispatch(filterCountry(filterText));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesSelector);
