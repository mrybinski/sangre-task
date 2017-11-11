import { connect } from 'react-redux';
import CountryDataTable from './countryDataTable';

function mapStateToProps(state) {
  return {
    loading: state.data.loading,
    entries: state.data.shownEntries,
  };
}

export default connect(mapStateToProps)(CountryDataTable);
