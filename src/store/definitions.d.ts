import { PopularMovieData } from './popular-movies/definition';
import { MovieDetails } from './movie-details/definition'

export type PopularMoviesStore = PopularMovieData;
export type MovieDetailsStore = MovieDetails;

export default interface AppStore {
  popular: PopularMoviesStore;
  details: MovieDetailsStore;
}