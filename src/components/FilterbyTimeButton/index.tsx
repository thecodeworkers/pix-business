import React from 'react';
import { Arrow } from '../../assets/img';
import './styles.scss';

const FilterbyTimeButton = () => (
  <button className="_filterBtn">
    <div>This month</div>
    <Arrow />
  </button>
)

export default FilterbyTimeButton;