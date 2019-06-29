import React from 'react';
import fetchData from './api';
import Grid from './Grid';
import { string } from 'prop-types';
import   {MyContext, SecContext}  from './App';
import SearchBox from './SearchBox';
export interface ISearch {
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
            <SecContext.Consumer>{(getGif)=> 
                <SearchBox getGif={getGif}/>
                }
            </SecContext.Consumer>
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
