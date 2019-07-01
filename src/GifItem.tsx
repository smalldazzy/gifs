import React from 'react';


export interface IGif {
    id: string,
    url: string,
    saveHandler: (query: string) => void
}


const GifItem = (props: IGif) => {
    return (
        <div className='item'>
            <img src={props.url} alt='pesiki'></img>
            <button className='savebtn' id={props.id} onClick={(e) => props.saveHandler(((e.target) as HTMLElement).id)}>save</button>
        </div>
    )
}
export default GifItem;