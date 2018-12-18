import { PopularMovie } from './popular-movies/definition';
import { MovieDetails } from './movie-details/definition'

export type PopularMoviesStore = PopularMovie[];
export type MovieDetailsStore = MovieDetails;

export default interface AppStore {
  popular: PopularMoviesStore;
  details: MovieDetailsStore;
}