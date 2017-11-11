import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CountryDataTable extends PureComponent {
  render() {
    if (this.props.loading) {
      return '';
    }

    return (
      <table className="Home">
        <tbody>
          <tr>
            <th>
              Country
            </th>
            <th>
              Population
            </th>
            <th>
              Life expectancy
            </th>
          </tr>
          {this.props.entries.map(entry => (
            <tr key={entry.country}>
              <td>
                {entry.country}
              </td>
              <td>
                {entry.data.population}
              </td>
              <td>
                {entry.data.expectancy}
              </td>
            </tr>))}
        </tbody>
      </table>
    );
  }
}

CountryDataTable.propTypes = {
  loading: PropTypes.bool.isRequired,
  entries: PropTypes.arrayOf(PropTypes.shape({
    country: PropTypes.string,
    data: PropTypes.shape({
      population: PropTypes.number,
      expectancy: PropTypes.number,
    }),
  })).isRequired,
};
