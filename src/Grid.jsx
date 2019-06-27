import React from 'react';
import GifItem from './GifItem';
const Grid = () => {
    return(
        <div
      style={{
        columns: "5 auto",
        columnGap: "20px"
      }}
    >
        <GifItem/>
        <GifItem/>
        <GifItem/>
        <GifItem/>
        <GifItem/>
        <GifItem/>
        <GifItem/>
        <GifItem/>
        <GifItem/>

    </div>
    )
}
export default Grid;