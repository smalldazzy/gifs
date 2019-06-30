import React from 'react';
import fetchData from './api';
import Grid from './Grid';
import GifItem from './GifItem';

const About = () => {
    const a= fetchData('dogs','stickers');
    console.log(a);
    let dan=a.then(item=> {console.log('item.data')
    return item.data});
    console.log(dan);
    return(
    <div>
    <h1>This service provides opportunity to find gifs and stickers</h1>
    <GifItem id='dasads' url='https://media2.giphy.com/media/cLcxtL1z8t8oo/giphy.gif?cid=043a88795d1645207638794d45e54297&rid=giphy.gif'/>
    </div>
    )
}
export default About;
