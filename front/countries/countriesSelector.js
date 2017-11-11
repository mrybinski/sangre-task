import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CountriesFilter from './countriesFilter';

export default class CountriesSelector extends PureComponent {
  toggle = (countryName, currentlySelected) => {
    if (currentlySelected) {
      this.props.deselect(countryName);
    } else {
      this.props.select(countryName);
    }
  }

  render() {
    if (this.props.loading) {
      return '';
    }

    const selectedItems = this.props.selected;
    const { toggle } = this;
    return (
      <div className="row country-selector">
        <CountriesFilter filter={this.props.filter} onFilterChange={this.props.filterCountry} />
        {this.props.data.map((countryName) => {
              const isSelected = selectedItems.indexOf(countryName) >= 0;
              const className = classNames('btn country-btn', {
                'btn-primary': isSelected,
                'btn-default': !isSelected,
              });
              return (
                <div className="col-md-12 col-xs-12" key={countryName}>
                  <button className={className} onClick={() => toggle(countryName, isSelected)} >{countryName}</button>
                </div>);
            })
            }
      </div>
    );
  }
}

CountriesSelector.propTypes = {
  loading: PropTypes.bool.isRequired,
  filter: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  select: PropTypes.func.isRequired,
  deselect: PropTypes.func.isRequired,
  filterCountry: PropTypes.func.isRequired,
};
