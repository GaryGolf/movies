import { PopularMovieData } from './popular-movies/definition';
import { MovieDetails } from './movie-details/definition'

export type PopularMoviesStore = PopularMovieData;
export type MovieDetailsStore = MovieDetails;

export interface AppStore {
  popular: PopularMoviesStore;
  details: MovieDetailsStore;
}

export * from './popular-movies/actions';
export * from './movie-details/actions';
