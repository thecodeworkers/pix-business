import React from 'react';
import { Props } from './interface';
import './styles.scss';

const Search = ({ filter }: Props) => {
  return (
    <div>
      <input type="text" onKeyUp={(event: any) => filter(event)}/>
    </div>
  )
}

export default Search;
