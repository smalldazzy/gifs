import React, { useContext, Suspense } from 'react';
import { MyContext, SecContext, ThirdContext } from './App';
import SearchBox from './SearchBox';
const Grid = React.lazy(() => import('./Grid'));

export interface ISearch {
    getGif: (query: string) => void
}
const Loading = () => <div>Loading...</div>

const Search = (props: ISearch) => {
    let val = useContext(MyContext);
    let getGif = useContext(SecContext); //будет ли лучше эти переменные объявить вне Search, а потом прописать интерфейс и добавить их в пропсы?
    let qur = useContext(ThirdContext);
    return (
        <div>
            <SearchBox getGif={getGif} searchHandler={qur} />
            <Suspense fallback={<Loading />}>
                <Grid gifs={val} />
            </Suspense>

        </div>
    )
}
export default Search;
