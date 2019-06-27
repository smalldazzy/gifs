import React from 'react';
import fetchData from './api';
import Grid from './Grid';
const Search = () => {
    console.log(fetchData('dog'));
    return(
    <div>
        <input placeholder='search gifs'></input>
        <button>Search</button>
    </div>
    )
}
export default Search;