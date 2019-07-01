import React, { useContext, useEffect, useState, Suspense } from 'react';
import   {MyContext, SecContext, ThirdContext}  from './App';
import SearchBox from './SearchBox';
const Grid = React.lazy(()=> import ('./Grid'));

export interface ISearch {
    getGif: (query) => void
}
const Loading = () => <div>Loading...</div>

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
    let qur = useContext(ThirdContext);
    console.log(val);
    return (
        <div>
            {/* <SecContext.Consumer>{(getGif)=> 
                <SearchBox getGif={getGif}/>
                }
            </SecContext.Consumer> */}
            <SearchBox getGif={getGif} searchHandler={qur}/>
            {/* <MyContext.Consumer>{(store) => {
                console.log(store);
                return (
                    <Grid gifs={store} />
                )
            }
            }
            </MyContext.Consumer> */}
            <Suspense fallback={Loading}>
            {<Grid gifs={val}/>}
            </Suspense>
            
        </div>
    )
}
export default Search;
