import React, { useContext } from 'react';
import { FourthContext } from './App';

export interface IGif{
    id: string,
    url:string
}

const GifItem = (props: IGif) => {
    let saveHandler = useContext(FourthContext);
    return(
    <div className='item'>
        <img src={props.url} alt='pesiki'></img>
        <button className='savebtn' id={props.id} onClick={(e)=>saveHandler(((e.target) as HTMLElement).id)}>save</button>
    </div>
    )
}
export default GifItem;