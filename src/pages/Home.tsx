import getMovie, { IError, IMovie } from '../helpers/httpsService';
import { useEffect, useState } from 'react';
import MovieNotFound from '../components/MovieNotFound';
import MovieForm from '../components/MovieForm';
import Content from '../components/Content';

function App() {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieData, setMovieData] = useState<IMovie | IError>({
    Response: 'False',
    Error: 'Incorrect IMDb ID.',
  });

  useEffect(() => {
    getMovie(movieTitle).then(setMovieData);
  }, [movieTitle]);

  function handleSearchClick(movie: string) {
    setMovieTitle(movie);
  }

  return (
    <>
      <MovieForm
        onSubmitMovie={(movie: string) => handleSearchClick(movie)}
        onResetSearch={(movie: string) => handleSearchClick(movie)}
      />
      {movieData.Response === 'True' && <Content movie={movieData} />}
      {movieData.Response === 'False' && movieTitle !== '' && (
        <MovieNotFound> Movie not found, try another title.</MovieNotFound>
      )}
    </>
  );
}

export default App;
