import React from 'react';
import { useState } from 'react';
import './Search.css';
import mag from '../../../assets/image/magnifying-glass.png';

function Search(props) {

  const [value,setValue] = useState(null)
  let {change} = props;


  const Search = () => {
    change([value])
  }

  return (
    <div className='search-box'>
      <div>
        <img src={mag} alt="search" onClick={()=> Search()}/>
        <input type="text" placeholder='جستجو' onInput={(e)=> setValue(e.target.value)}/>
      </div>
    </div>
  )
}

export default Search
