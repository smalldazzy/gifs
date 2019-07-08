import React from 'react';


export interface IGif extends SGif {
    saveHandler: (query: string) => void
}
interface SGif {
    id: string,
    url: string
}


const GifItem = (props: IGif) => {
    return (
        <div className='item'>
            <img src={props.url} alt='Gif'></img>
            <button className='savebtn' id={props.id} onClick={(e) => props.saveHandler(((e.target) as HTMLElement).id)}>save</button>
        </div>
    )
}
export const SGifItem = (props: SGif) => {
    return (
        <div className='item'>
            <img src={props.url} alt='Gif'></img>
        </div>
    )
}
export default GifItem;