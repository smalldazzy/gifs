import React from 'react';
import { ISearch } from './Search';
interface ISearchBox extends ISearch {
    searchHandler(query: string): void
}
const SearchBox = (props: ISearchBox) => {
    return (<div id='searchbox'>
        <input id='inp' className='searchfield' placeholder='search gifs' onChange={(e) => { console.log('typing'); props.searchHandler(e.target.value) }}></input>
        <button className='submitbtn' onClick={(e) => props.getGif((document.getElementById('inp') as HTMLInputElement).value)}>Search</button>
        <input type='radio' id='cgif' name='type' value='gif' defaultChecked></input>
        <label>gif</label>
        <input type='radio' id='cstick' name='type' value='sticker'></input>
        <label>sticker</label>
    </div>
    )
}
export default SearchBox;