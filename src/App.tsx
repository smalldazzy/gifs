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
export const ThirdContext=React.createContext(null);
interface IState {
  store: Array<any>,
  offset: number,
  query: string,
  scrolling: boolean
}
interface IProps {}
class App extends React.Component<IProps,IState> {
  constructor(props: IProps){
    super(props);
  this.state={
    store: [/*{id: 'test', url: 'https://media2.giphy.com/media/cLcxtL1z8t8oo/giphy.gif?cid=043a88795d1645207638794d45e54297&rid=giphy.gif'}*/],
    offset: 0,
    query: '' ,
    scrolling: false  
  }
  this.searchim = this.searchim.bind(this);
  }
  
  // getData = async () =>{
  //   const data = await fetchData('cats');
  //   this.setState({
  //     store: data.data
  //   })
  //   console.log(this.state.store);

  // }
   getData = async (query) => {
     let inp = document.getElementById('cgif') as HTMLInputElement;
     console.log(inp.checked);
     let type='gifs';
     if (!inp.checked) {type='stickers'}
    //  e.preventDefault();
    const data = await fetchData(query,type, this.state.offset);
    // this.setState({store:[]});
    console.log('zapisivau');
    console.log(this.state);
    data.data.map(element => {
        this.state.store.push({ id: element.id, url: element.images.original.url, saved:false })
    })
    this.forceUpdate(); //иначе нет сетки с выдачей, хотя данные в компонентах есть
    
  }
  loadMore() {
    this.setState( prev => ({offset: prev.offset + 5}));
    let inp = document.getElementById('cgif') as HTMLInputElement;
     console.log(inp.checked);
     let type='gifs';
     if (!inp.checked) {type='stickers'}
    this.getData(this.state.query);
  }
  handleScroll=(e)=>{
    const {scrolling} = this.state;
    if (scrolling) return;
    const lastLi = document.querySelector('div.grid-container > div:last-child') as HTMLElement;
    const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    const bottomOffset = 20;
    if (pageOffset > lastLiOffset - bottomOffset) this.loadMore();


  }
  saveItem(id: string){
    let saved=JSON.parse((localStorage.getItem("GIFS")! || "[]"));
    saved.push({id: id, type: 'gifs '});
    localStorage.setItem("GIFS", JSON.stringify(saved));
  }
  componentDidUpdate(){
    console.log('updated');
  }
  componentWillMount(){
    window.addEventListener('scroll', (e)=>{
      this.handleScroll(e);
    });
  }
  searchim(query: string){
    this.setState({ query: query, store: [] });
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
            <ThirdContext.Provider value={this.searchim}>
              <Route path='/search' component={Search} /*render={()=>(<Search getGif={this.getData}/>)}*/ />
            </ThirdContext.Provider>
          </SecContext.Provider>
          <Route path='/saved' component={Saved}/>
          <Route path='/about' component={About}/>
          <a onClick={()=>this.loadMore()}>Load more</a>
        </div>
        </MyContext.Provider>
      </Router>
    );
  }
}

export default App;
