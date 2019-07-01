import React, { useContext } from 'react';
import GifItem from './GifItem';
import { FourthContext } from './App';

interface IGrid {
  gifs: Array<any>
}
const Grid = (props: IGrid) => {
  let saveHandler = useContext(FourthContext);
  return (
    <div className='grid-container'
      style={{
        display: 'grid',
      }}
    >
      {props.gifs.map(item => {
        return (<GifItem key={item.id} id={item.id} url={item.url} saveHandler={saveHandler}/>)
      })
      }


    </div>
  )
}
export default Grid;