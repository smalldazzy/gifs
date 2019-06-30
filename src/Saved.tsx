import React from 'react';
import Grid from './Grid';
import { fetchByIDs, fetchByID } from './api';

const Saved = () =>{
    let saved = JSON.parse((localStorage.getItem("GIFS")! || "[]"));
    console.log(saved);
    let savedstate=[];
    // let prepq='';
    // saved.map(item => prepq=prepq+item+',');
    // prepq=prepq.slice(0,-1);
    // console.log(prepq);
    // async function getSaved (query:string)  {
    //     const data = await fetchByIDs(query);
    //     data.map(item=> savedstate.push(item));
    // }
    // getSaved(prepq);
    saved.map(async item =>{
        
        const data = await fetchByID(item.id,item.type);
        savedstate.push( {id: data.data.id, url: data.data.images.original.url});
    })
    console.log(savedstate);
    return (
    <div>
        <h1>Saved stuff</h1>
        <Grid gifs={savedstate}/>

    </div>
    )
}
export default Saved;