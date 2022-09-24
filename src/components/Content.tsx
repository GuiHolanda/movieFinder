import { instaceOfIMovie } from '../helpers/helperFunctions';
import { IError, IMovie } from '../helpers/httpsService';
import FavoriteButton from './FavoriteButton';

export default function Content({ movie }: { movie: IMovie | IError }) {
  const status = 'active';
  return instaceOfIMovie(movie) ? (
    <main className=" contentCard m-auto p-4">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-8 card">
            <div className="px-3">
              <h1 className="d-flex py-2 mb-0">
                {movie.Title}
                <span className="d-flex align-items-center justify-content-center">
                  <FavoriteButton movie={movie} />
                </span>
              </h1>
              <p className="py-2">{movie.Plot}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Genre(s): </strong>
                {movie.Genre}
              </li>
              <li className="list-group-item">
                <strong>Year: </strong>
                {movie.Year}
              </li>
              <li className="list-group-item">
                <strong>Run Time: </strong>
                {movie.Runtime}
              </li>
              <li className="list-group-item">
                <strong>Main Actor(s): </strong>
                {movie.Actors}
              </li>
              <li className="list-group-item">
                <strong>Language(s): </strong>
                {movie.Language}
              </li>
              <li className="list-group-item">
                <strong>Country(es): </strong>
                {movie.Country}
              </li>
              <li className="list-group-item">
                <strong>Director(s): </strong>
                {movie.Director}
              </li>
              <li className="list-group-item">
                <strong>Writer(s): </strong>
                {movie.Writer}
              </li>
            </ul>
          </div>
          <div className="col-md-4 text-center p-2">
            <img
              className="img-fluid rounded-end"
              src={movie.Poster}
              alt={movie.Title}
            />
          </div>
        </div>
      </div>
    </main>
  ) : (
    <div></div>
  );
}
