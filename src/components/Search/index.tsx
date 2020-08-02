import React from 'react';
import { Props } from './interface';
import search from '../../assets/img/Static/search.png';
import './styles.scss';

const filterResults = (event: any, filter: any) => {
  event.preventDefault();
  const currentValue = event.target.value;

  filter(currentValue);
}

const Search = ({ filter }: Props) => {
  return (
    <div>
      <img alt="search" className='_iconSearch' width='15px' src={search}></img>
      <input type="text" className='_search' placeholder='Search' onKeyUp={(event: any) => filterResults(event, filter)}/>
    </div>
  )
}

export default Search;
