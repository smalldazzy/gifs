import React from 'react';
import GifItem, { IGif } from './GifItem';
import { getDefaultSettings } from 'http2';



interface IGrid {
  gifs: Array<any>
}
const Grid = (props: IGrid) => {
  console.log(props.gifs);
    return(
        <div
      style={{
        display: 'grid',
        // columns: "5 auto",
        columnGap: "20px"
      }}
    >
      {props.gifs.map(item=> <GifItem key={item.id} id={item.id} url={item.url}/>)}
      {/* <GifItem id='dasads' url='https://media2.giphy.com/media/cLcxtL1z8t8oo/giphy.gif?cid=043a88795d1645207638794d45e54297&rid=giphy.gif'/> */}
    

    </div>
    )
}
export default Grid;