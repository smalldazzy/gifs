import React from 'react';
import { ISearch } from './Search';
import { Redirect } from 'react-router-dom';

const SearchBox = (props: ISearch) => {
    return (<div id='searchbox'>
        <input id='inp' placeholder='search gifs' onChange={() => console.log('nabral')}></input>
        <button onClick={(e) => props.getGif(e, (document.getElementById('inp') as HTMLInputElement).value)}>Search</button>
            <input type='radio' id='cgif' name='type'value='gif' defaultChecked></input>
            <label>gif</label>
            <input type='radio' id='cstick' name='type' value='sticker'></input>
            <label>sticker</label>
        
        
    </div>
    )
}
export default SearchBox;