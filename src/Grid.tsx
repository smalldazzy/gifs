import React, { useContext, Suspense } from 'react';
import { SGifItem } from './GifItem';
import { FourthContext } from './App';

interface IGrid {
  gifs: Array<any>
  saved: boolean
}
const Grid = (props: IGrid) => {
  const GifItem = React.lazy(() => import('./GifItem'));
  let saveHandler = useContext(FourthContext);
  console.log(props.saved);
  return (
    <div className='grid-container'
      style={{
        display: 'grid',
      }}
    >
      {props.gifs.map(item => {
        if (!props.saved) {
          return (
            <Suspense fallback={<div>Loading...</div>}>
              <GifItem key={item.id} id={item.id} url={item.url} saveHandler={saveHandler} />
            </Suspense>

          )
        }
        else { return (<SGifItem key={item.id} id={item.id} url={item.url} />) }
      })
      }


    </div>
  )
}
export default Grid;