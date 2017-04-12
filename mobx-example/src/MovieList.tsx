import * as React from 'react';
import { observer } from 'mobx-react';
import Store from './Store';
import MovieBox from './MovieBox';
import LoadingIndicator from './LoadingIndicator';

function MovieList({ store, date } : {store: Store, date: string}) {
  const movieBoxes = store.moviesForDate(date).map(movie => (
    <li key={movie.title}><MovieBox movie={movie} /></li>
  ));
  return (
    <div className="w5 pr3">
      <h2>{date}</h2>
      <LoadingIndicator store={store}>
        <ol className="list pa0">
          {movieBoxes}
        </ol>
      </LoadingIndicator>
    </div>
  );
}


export default observer(MovieList);
