import React from 'react';

export interface IGif{
    id: string,
    url:string
}

const GifItem = (props: IGif) => {
    return(
    <div className='item'>
        <img src={props.url} alt='pesiki'></img>
    </div>
    )
}
export default GifItem;