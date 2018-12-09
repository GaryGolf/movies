import Axios, { AxiosPromise, AxiosResponse } from 'axios';
import { API_KEY } from './constants';


export interface PopularDataResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface PopularData {
  page: number;
  total_pages: number;
  total_results: number;
  results: PopularDataResult[];

}


export default {
  
  getPopular: (page = 1):AxiosPromise<PopularData> => Axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
    .then((result:AxiosResponse<PopularData>) => result)
}