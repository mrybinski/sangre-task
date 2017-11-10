import { connect } from 'react-redux';
import CountriesSelector from './countriesSelector';
import { selectCountry, deselectCountry } from './countriesActions';
import { showCountry } from '../data/dataActions';

function mapStateToProps(state) {
  return {
    loading: state.countries.loading,
    data: state.countries.all,
    selected: state.countries.selected,
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
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesSelector);
