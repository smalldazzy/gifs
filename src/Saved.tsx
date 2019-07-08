import React from 'react';
import Grid from './Grid';

const Saved = () => {
    let saved = JSON.parse((localStorage.getItem("GIFS")! || "[]"));
    return (
        <div>
            <h1>Saved stuff</h1>
            <Grid gifs={saved} saved={true} />

        </div>
    )
}
export default Saved;