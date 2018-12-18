import { PopularMovie } from './popular-movies/definition';

export type PopularMoviesStore = PopularMovie[];

export default interface AppStore {
  popular: PopularMoviesStore;
}