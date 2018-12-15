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

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {id: number, name: string, poster_path: string, backdrop_path: string };
  budget: number;
  genres: Array<{ id: number, name: string}>
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<{ id: number, logo_path: string, name: string, origin_country: string }>;
  production_countries: Array<{iso_3166_1: string, name: string }>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<{ iso_639_1: string, name: string }>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default {
  
  getPopular: (page = 1):AxiosPromise<PopularData> => Axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
    .then((result:AxiosResponse<PopularData>) => result),

  getDetails: (movie_id: string) => Axios
    .get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
    .then((result:AxiosResponse<MovieDetails>) => result),
}