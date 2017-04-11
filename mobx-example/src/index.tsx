import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Store from './Store';
import Movie from './Movie';
import Filter from './Filter';
import dates from './dates';
import MovieList from './MovieList';
import { requestMovies } from './movieApi';

const store = new Store();

const movieLists = dates.map(date => <MovieList key={date} date={date} store={store}/>);
requestMovies().then(movies => store.movies = movies.map(m => new Movie(m.title, m.date)));

ReactDOM.render(
    <main className="ph6 pv4">
      <h1 className="mt0">Programme</h1>
      <Filter store={store} />
      <div className="flex flex-row">
        {movieLists}
      </div>
    </main>,
  document.getElementById('app')
);
