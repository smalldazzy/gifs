
const API_KEY='7QQMzGlbi3AlGUwXG6F6IOOT6vhNcrWl';

const fetchData = async (query: string, type: string, offset: number = 0) => {
    const response=await fetch(`http://api.giphy.com/v1/${type}/search?q=${query}&api_key=${API_KEY}&limit=5&offset=${offset}`);
    return response.json();
  }
export const fetchByIDs = async (query: string) => {
  const response = await fetch(`http://api.giphy.com/v1/gifs/ids=${query}&api_key=${API_KEY}`);
  return response.json();

}
export const fetchByID = async (query: string,type: string) => {
  const response = await fetch(`http://api.giphy.com/v1/${type}/${query}?api_key=${API_KEY}`);
  return response.json();
}
export default fetchData;