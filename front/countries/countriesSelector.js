import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
      <div className="Home">
         Countries:
         <ul>
           {this.props.data.map((countryName) => {
             const isSelected = selectedItems.indexOf(countryName) >= 0;
             const className = classNames({
               selected: isSelected,
             });
             return <li className={className} key={countryName} onClick={() => toggle(countryName, isSelected)} >{countryName}</li>;
           })
            }
         </ul>
      </div>
    );
  }
}

CountriesSelector.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  select: PropTypes.func.isRequired,
  deselect: PropTypes.func.isRequired,
};
