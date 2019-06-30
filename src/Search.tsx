import React, { useContext, useEffect, useState } from 'react';
import Grid from './Grid';
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
    let val = useContext(MyContext);
    let getGif = useContext(SecContext);
    console.log(val);
    return (
        <div>
            {/* <SecContext.Consumer>{(getGif)=> 
                <SearchBox getGif={getGif}/>
                }
            </SecContext.Consumer> */}
            <SearchBox getGif={getGif}/>
            {/* <MyContext.Consumer>{(store) => {
                console.log(store);
                return (
                    <Grid gifs={store} />
                )
            }
            }
            </MyContext.Consumer> */}
            {<Grid gifs={val}/>}
        </div>
    )
}
export default Search;
