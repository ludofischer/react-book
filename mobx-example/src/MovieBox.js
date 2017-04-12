//  @flow
/* START:definition */
/* START:import */
import React from 'react';
import PropTypes from 'prop-types';
import { observer } from "mobx-react";

import Movie from './Movie';
import Checkbox from './Checkbox';

export default observer(MovieBox);
/* END:definition */
/* END:body */
function MovieBox({ movie }) {
  /* END:definition */
  function onChange(checked) {
    if (checked) {
      movie.favorite = true;
    } else {
      movie.favorite = false;
    }
  }

  return (
      <div className="h4 pa3 flex flex-column justify-between ba b--dashed">
      <h3 className="mt0 mb3">{movie.title}</h3>
      <Checkbox
    name="addToFavorite"
    id="addToFavorite"
    label="Favorite"
    checked={movie.favorite}
    onChange={onChange}
      />
      </div>
  );
  /* START:definition */
}

MovieBox.propTypes = {
  movie: PropTypes.instanceOf(Movie),
};
