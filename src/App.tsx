import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
// import Search from './Search';
// import Saved from './Saved';
// import About from './About';
import {fetchData} from './api';


export const MyContext = React.createContext(null);
export const SecContext = React.createContext(null);
export const ThirdContext = React.createContext(null);
export const FourthContext = React.createContext(null);
interface IState {
  store: Array<any>,
  offset: number,
  query: string,
  scrolling: boolean
}
const About = React.lazy(() => import(/* webpackChunkName: "about-chunk" */ './About'));
const Search = React.lazy(() => import(/* webpackChunkName: "search-chunk" */ './Search'));
const Saved = React.lazy(() => import(/* webpackChunkName: "saved-chunk" */ './Saved'));


interface IProps { }
class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      store: [],
      offset: 0,
      query: '',
      scrolling: false
    }
    this.searchim = this.searchim.bind(this);
  }

  getType() {
    let inp = document.getElementById('cgif') as HTMLInputElement;
    if (inp.checked) return 'gifs'
    else return 'stickers';
  }
  getData = async (query: string) => {
    let type = this.getType();
    const data = await fetchData(query, type, this.state.offset);
    console.log('State changing');
    data.data.forEach(element => {
      this.setState(prev => {
        return ({
        store: [...prev.store, {
          id: element.id, 
          url: element.images.original.webp, 
          saved: false
        }]
      });
      });
    });
    
    this.setState({ scrolling: false });
  }
  loadMore() {
    this.setState(prev => ({ offset: prev.offset + 9, scrolling: true }));
    this.getData(this.state.query);
  }
  handleScroll = (e) => {
    const { scrolling } = this.state;
    if (scrolling) return;
    const lastLi = document.querySelector('div.grid-container > div:last-child') as HTMLElement;
    const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    const bottomOffset = 20;
    if (pageOffset > lastLiOffset - bottomOffset) this.loadMore();
  }
  saveItem = (id: string) => {
    let type = this.getType();
    let saved = JSON.parse((localStorage.getItem("GIFS")! || "[]"));
    let saveurl = this.state.store.find(element => element.id===id);
    console.log(saveurl.url);
    saved.push({ id: id, url: saveurl.url });
    localStorage.setItem("GIFS", JSON.stringify(saved));
    console.log('saved');
  }
  componentWillMount() {
    window.addEventListener('scroll', (e) => {
      this.handleScroll(e);
    });
  }
  searchim(query: string) {
    this.setState({ query: query, store: [] });
  }
  render() {
    console.log('rendering');
    return (
      <Router>
        <MyContext.Provider value={this.state.store}>
          <div className="App">
            <Nav />
            <Suspense fallback={<div>Loading...</div>}>
            <SecContext.Provider value={this.getData}>
              <ThirdContext.Provider value={this.searchim}>
                <FourthContext.Provider value={this.saveItem}>
                  <Route path='/search' component={Search} /*render={()=>(<Search getGif={this.getData}/>)}*/ />
                </FourthContext.Provider>
              </ThirdContext.Provider>
            </SecContext.Provider>
            <Route path='/saved' component={Saved} />
            <Route path='/about' component={About} />
            </Suspense>
          </div>
        </MyContext.Provider>
      </Router>
    );
  }
}

export default App;
