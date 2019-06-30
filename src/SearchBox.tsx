import React from 'react';
import { ISearch } from './Search';
import { Redirect } from 'react-router-dom';

const SearchBox = (props: ISearch) => {
    return (<div id='searchbox'>
        <input id='inp' placeholder='search gifs' onChange={() => console.log('nabral')}></input>
        <button onClick={(e) => props.getGif(e, (document.getElementById('inp') as HTMLInputElement).value)}>Search</button>
    </div>
    )
}
export default SearchBox;