import React from 'react';
import { Props } from './interface';
import './styles.scss';
import search from '../../assets/img/Static/search.png'

const Search = ({ filter }: Props) => {
  return (
    <div>
      <img className='_iconSearch' width='10px' src={search}></img>
      <input type="text" className='_search' placeholder='Search' onKeyUp={(event: any) => filter(event)}/>
    </div>
  )
}

export default Search;
