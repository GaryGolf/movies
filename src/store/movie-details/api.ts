import Axios, { AxiosResponse } from 'axios';
import { API_KEY } from '../../../env/constants';
import { MovieDetails } from './definition';

export const getDetails = (movie_id: string) => Axios
    .get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
    .then((result:AxiosResponse<MovieDetails>) => result);
