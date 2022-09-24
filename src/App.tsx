import AppHeader from './components/AppHeader';
import './styles/custom.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AppFooter from './components/AppFooter';
import getMovie, { IError, IMovie } from './helpers/httpsService';
import { useEffect, useState } from 'react';
import MovieNotFound from './components/MovieNotFound';
import { listContext } from './helpers/AppContexts';
import MovieForm from './components/MovieForm';
import Content from './components/Content';
import { instaceOfIMovie } from './helpers/helperFunctions';

const favoriteList: string[] = [];

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

  function pushFunction() {
    if (instaceOfIMovie(movieData)) {
      favoriteList.push(movieData.Title);
    }
  }

  return (
    <listContext.Provider value={{ favoriteList, pushFunction }}>
      <div className="app">
        <AppHeader />
        <MovieForm
          onSubmitMovie={(movie: string) => handleSearchClick(movie)}
          onResetSearch={(movie: string) => handleSearchClick(movie)}
        />
        {movieData.Response === 'True' && <Content movie={movieData} />}
        {movieData.Response === 'False' && movieTitle !== '' && (
          <MovieNotFound />
        )}
        <AppFooter />
      </div>
    </listContext.Provider>
  );
}

export default App;
