import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList'
import SavedList from './Movies/SavedList';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      {/* Adding Switch Tag */}
      <Switch>
        {/* Creating My Routes */}
        <Route path="/movies/:id">
          <MovieList movies={ movieList } />
        </Route>
        <Route path="/">
          <MovieList movies={ movieList } />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
