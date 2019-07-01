import React from 'react';
import Grid from './Grid';
import {fetchByID} from './api';
import {IGif} from './GifItem';

const Saved = () => {
    let saved = JSON.parse((localStorage.getItem("GIFS")! || "[]"));
    console.log(saved);
    let savedstate = [];
    saved.map(async item => {
        console.log(item.type);
        const data = await fetchByID(item.id);
        console.log(data);
        savedstate.push({ id: data.data.id, url: data.data.images.original.webp });
    })
    console.log(savedstate);
    return (
        <div>
            <h1>Saved stuff</h1>
            <Grid gifs={savedstate} />

        </div>
    )
}
export default Saved;