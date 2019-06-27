
const API_KEY='7QQMzGlbi3AlGUwXG6F6IOOT6vhNcrWl';

const fetchData = async (query: string) => {
    const response=await fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&limit=5`);
    return response.json();
  }
  export default fetchData;