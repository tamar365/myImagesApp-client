import axios from 'axios';

//usually - url saved in env file
export const myAxios = async (endPoint) => {
  let url = "http://localhost:3001/api"+`${endPoint}`
  const response = await axios.get("http://localhost:3001/api"+`${endPoint}`);
  return response;
};