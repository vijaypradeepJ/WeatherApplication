import React from 'react'
import { CiSearch } from "react-icons/ci";

function SearchEngine() {
  return (
    <div className='searchengine'>
        <input type="text"
        className='city-serach'
        placeholder='Enter the city name' 
        />
        <button><CiSearch/></button>


    </div>
  );
}

export default SearchEngine