import Carousel from 'react-bootstrap/Carousel';
import MovieNotFound from '../components/MovieNotFound';
import { useListContext } from '../helpers/AppContexts';

function UncontrolledExample() {
  const { favoriteList } = useListContext();
  return (
    <div className="d-flex flex-column container p-3">
      <div className="text-center my-4">
        <h2 className="title">Favorite List</h2>
        <h5 className="footerFont">
          Check it out the Movies we got in your favorite list so far !
        </h5>
      </div>
      {favoriteList.length !== 0 && (
        <Carousel className=" favList m-auto" slide={false}>
          {favoriteList.map(movie => (
            <Carousel.Item key={movie.Title}>
              <img
                className="d-block w-100"
                src={movie.Poster}
                alt={movie.Title}
              />
              <Carousel.Caption className="opacity-100 rounded-3 pt-0 text-bg-dark "></Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
      {favoriteList.length === 0 && (
        <MovieNotFound>
          Sorry, you haven't added any movie to your favorite List
        </MovieNotFound>
      )}
    </div>
  );
}

export default UncontrolledExample;
