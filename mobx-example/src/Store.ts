import { observable, computed } from 'mobx';
import Movie from './Movie';

export default class Store {
  @observable
  filter = false;
  @observable
  loading = false;
  @observable
    movies: Array<Movie> = [];

  @computed
  get filteredMovies() {
    if (this.filter) {
      return this.movies.filter(m => m.favorite);
    }
    return this.movies;
  }
    moviesForDate(day: string) {
    return this.filteredMovies.filter(m => m.day === day);
  }
}
