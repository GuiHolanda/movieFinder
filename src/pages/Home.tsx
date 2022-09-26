import getMovie, { IError, IMovie } from '../helpers/httpsService';
import { useState } from 'react';
import MovieNotFound from '../components/MovieNotFound';
import MovieForm from '../components/MovieForm';
import Content from '../components/Content';
import Sugested from '../components/Sugested';

function App() {
  const [movieData, setMovieData] = useState<IMovie | IError>({
    Response: '',
    Error: 'Incorrect IMDb ID.',
  });

  function handleSearchClick(movie: string) {
    movie === ''
      ? setMovieData({
          Response: '',
          Error: 'Incorrect IMDb ID.',
        })
      : getMovie(movie).then(setMovieData);
  }

  return (
    <>
      <MovieForm
        onSubmitMovie={(movie: string) => handleSearchClick(movie)}
        onResetSearch={(movie: string) => handleSearchClick(movie)}
      />
      {movieData.Response === 'True' && <Content movie={movieData} />}
      {movieData.Response === 'False' && (
        <MovieNotFound> Movie not found, try another title.</MovieNotFound>
      )}
      {movieData.Response === '' && <Sugested />}
    </>
  );
}

export default App;
