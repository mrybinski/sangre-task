import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'throttle-debounce';

const debounceTime = 200;
export default class CountriesFilter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { filter: '' };
    this.fireActionDebounced = debounce(debounceTime, this.fireChangeAction);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ filter: nextProps.filter });
  }

  changeName = (event) => {
    const { value } = event.target;
    this.setState({ filter: value });
    this.fireActionDebounced(value);
  }

  fireChangeAction(value) {
    this.props.onFilterChange(value);
  }

  render() {
    return (
      <div className="filter">
        <input
          type="text"
          className="form-control"
          placeholder="Filter"
          value={this.state.filter}
          onChange={this.changeName}
        />
      </div>
    );
  }
}

CountriesFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
