import React, { useContext, Suspense } from 'react';
import { MyContext, SecContext, ThirdContext } from './App';
import SearchBox from './SearchBox';

export interface ISearch {
    getGif: (query: string) => void
}

const Search = (props: ISearch) => {
    const Grid = React.lazy(() => import(/* webpackChunkName: "grid-chunk" */ './Grid'));
    let val = useContext(MyContext);
    let getGif = useContext(SecContext);
    let qur = useContext(ThirdContext);
    return (
        <div>
            <SearchBox getGif={getGif} searchHandler={qur} />
            <Suspense fallback={<div>Loading...</div>}>
                <Grid gifs={val} saved={false} />
            </Suspense>

        </div>
    )
}
export default Search;
