import { PopularMovieData } from './popular-movies/definition';
import { MovieDetails } from './movie-details/definition'
import { SearchKeyword } from './keywords/definitions'

export type PopularMoviesStore = PopularMovieData;
export type MovieDetailsStore = MovieDetails;
export type SearchKeywordStore = SearchKeyword[];

export interface AppStore {
  popular: PopularMoviesStore;
  details: MovieDetailsStore;
  keyword: SearchKeywordStore;
}

export * from './popular-movies/actions';
export * from './movie-details/actions';
export * from './keywords/actions';
