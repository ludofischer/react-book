import { observable, computed } from 'mobx';

export default class Store {
  @observable
  filter = false;
  @observable
  loading = false;
  @observable
  movies = [];

  @computed
  get filteredMovies() {
    if (this.filter) {
      return this.movies.filter(m => m.favorite);
    }
    return this.movies;
  }
  moviesForDate(day) {
    return this.filteredMovies.filter(m => m.date === day);
  }
}
