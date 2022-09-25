import { instaceOfIMovie } from '../helpers/helperFunctions';
import { IError, IMovie } from '../helpers/httpsService';
import FavoriteButton from './FavoriteButton';
import RatingStars from './RatingStars';

export default function Content({ movie }: { movie: IMovie | IError }) {
  const status = 'active';
  return instaceOfIMovie(movie) ? (
    <main className=" contentCard m-auto p-4">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-6 card">
            <div className="px-3">
              <div className="d-flex justify-content-between">
                <h1 className="d-flex title py-2 me-3 mb-0">{movie.Title}</h1>
                <FavoriteButton movie={movie} />
              </div>
              <p className="py-2 smallFont">{movie.Plot}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item p-2 smallFont">
                <strong>Genre(s): </strong>
                {movie.Genre}
              </li>
              <li className="list-group-item smallFont p-2">
                <strong>Year: </strong>
                {movie.Year}
              </li>
              <li className="list-group-item smallFont p-2">
                <strong>Run Time: </strong>
                {movie.Runtime}
              </li>
              <li className="list-group-item smallFont p-2">
                <strong>Main Actor(s): </strong>
                {movie.Actors}
              </li>
              <li className="list-group-item smallFont p-2">
                <strong>Language(s): </strong>
                {movie.Language}
              </li>
              <li className="list-group-item smallFont p-2">
                <strong>Country(es): </strong>
                {movie.Country}
              </li>
              <li className="list-group-item smallFont p-2">
                <strong>Director(s): </strong>
                {movie.Director}
              </li>
              <li className="list-group-item smallFont p-2">
                <strong>Writer(s): </strong>
                {movie.Writer}
              </li>
              <li className="d-flex list-group-item smallFont p-2">
                <strong>Imdb Rating: </strong>
                <RatingStars movie={movie} />
              </li>
            </ul>
          </div>
          <div className="col-md-6 align-self-center text-center smallFont p-2">
            <img className=" w-75" src={movie.Poster} alt={movie.Title} />
          </div>
        </div>
      </div>
    </main>
  ) : (
    <div></div>
  );
}
