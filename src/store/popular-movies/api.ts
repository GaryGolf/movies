import Axios, { AxiosPromise, AxiosResponse } from 'axios';
import { API_KEY } from '../../../env/constants';
import {PopularMovieData} from './definition'


export const getPopular = (page = 1):AxiosPromise<PopularMovieData> => Axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
    .then((result:AxiosResponse<PopularMovieData>) => result);

export const getSearch = (query: string, page = 1):AxiosPromise<PopularMovieData> => Axios
    .get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`)
    .then((result:AxiosResponse<PopularMovieData>) => result);

export const getKeywordSearch = (query: string, page = 1): AxiosPromise<any> => Axios
    .get(`https://api.themoviedb.org/3/search/keyword?api_key=${API_KEY}&query=${query}&page=${page}`)
    
