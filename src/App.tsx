import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Search from './Search';
import Saved from './Saved';
import About from './About';
import fetchData from './api';

export const MyContext=React.createContext(null);
export const SecContext=React.createContext(null);
class App extends React.Component {
  state={
    store: [/*{id: 'test', url: 'https://media2.giphy.com/media/cLcxtL1z8t8oo/giphy.gif?cid=043a88795d1645207638794d45e54297&rid=giphy.gif'}*/]
    }
  
  // getData = async () =>{
  //   const data = await fetchData('cats');
  //   this.setState({
  //     store: data.data
  //   })
  //   console.log(this.state.store);

  // }
   getData = async (e,query) => {
     e.preventDefault();
    const data = await fetchData(query);
    this.setState({store:[]});
    console.log('zapisivau');
    console.log(this.state);
    data.data.map(element => {
        this.state.store.push({ id: element.id, url: element.images.original.url, saved:false })
    })
    
  }
  saveItem(id: string){
    let saved=JSON.parse((localStorage.getItem("GIFS")! || "[]"));
    saved.push(id);
    localStorage.setItem("GIFS", JSON.stringify(saved));
  }
  componentDidUpdate(){
    console.log('updated');
  }
  render() {
    console.log('render');
    // this.saveItem('F0HQQ0p3Mp8QM');
    return (
      <Router>
        <MyContext.Provider value={this.state.store}>
        <div className="App">
          <Nav/>
          <SecContext.Provider value={this.getData}>
            <Route path='/search' component={Search} /*render={()=>(<Search getGif={this.getData}/>)}*/ />
          </SecContext.Provider>
          <Route path='/saved' component={Saved}/>
          <Route path='/about' component={About}/>
        </div>
        </MyContext.Provider>
      </Router>
    );
  }
}

export default App;
