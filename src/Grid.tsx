import React from 'react';
import GifItem, { IGif } from './GifItem';



interface IGrid {
  gifs: Array<any>
}
const Grid = (props: IGrid) => {
  console.log(props.gifs);
    return(
        <div className='grid-container'
      style={{
        display: 'grid',        
    }}
    >
    {props.gifs.map(item=> { console.log(item);
    return (<GifItem key={item.id} id={item.id} url={item.url} />)})
    }
        

    </div>
    )
}
export default Grid;