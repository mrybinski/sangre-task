import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Overlay from '../utility/overlay';

export default class CountryDataTable extends PureComponent {
  render() {
    return (
      <div className="col-md-8 data-column">
        <Overlay visible={this.props.loading} />
        <div className="scrollable">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
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
              </thead>
              <tbody>
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
          </div>
        </div>
      </div>
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
