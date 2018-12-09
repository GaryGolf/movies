import axios from 'axios';
import { API_KEY } from './constants';

export default {
  getPopular: async (page = 1) => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    return axios.get(url)
      .then(result => result)
  }
}