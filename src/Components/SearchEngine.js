import React from 'react'
import { CiSearch } from "react-icons/ci";
import "./Style.css";

function SearchEngine() {
  return (
    <div className='SearchEngine'>
        <input type="text"
        className='city-serach'
        placeholder='Enter the city name' 
        />
        <button><CiSearch/></button>


    </div>
  );
}

export default SearchEngine