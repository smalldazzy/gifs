import React from 'react';
import fetchData from './api';
import Grid from './Grid';
import { string } from 'prop-types';
import   {MyContext}  from './App';
interface ISearch {
    getGif: (e, query) => void
}
const Search = (props: ISearch) => {
    // console.log(fetchData('dog'));
    // let state = [{ id: string, url: string }];
    // const getData = async () => {
    //     const data = await fetchData('cats');
    //     console.log(data.data);
    //     data.data.map(element => {
    //         state.push({ id: element.id, url: element.images.original.url })
    //     })
    // }
    // console.log(state);
    // console.log('sd');

    return (
        <div>

            <input id='inp'placeholder='search gifs' onChange={()=>console.log('nabral')}></input>
            <button onClick={(e) => props.getGif(e,(document.getElementById('inp')as HTMLInputElement).value)}>Search</button> 
            <MyContext.Consumer>{(store) => {
                console.log(store);
                return (
                    <Grid gifs={store} />
                )
            }
            }
            </MyContext.Consumer>
        </div>
    )
}
export default Search;
