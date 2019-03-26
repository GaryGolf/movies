import Axios, { AxiosPromise, AxiosResponse } from 'axios';
import { API_KEY } from '../../../env/constants';
import { SearchKeywordData } from './definitions';

export const getKeywordSearch = (query: string, page = 1): AxiosPromise<SearchKeywordData> => Axios
    .get(`https://api.themoviedb.org/3/search/keyword?api_key=${API_KEY}&query=${query}&page=${page}`)
    .then((result: AxiosResponse<SearchKeywordData>) => result)
