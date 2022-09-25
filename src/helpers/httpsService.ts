export interface IMovie {
  Genre: string;
  Title: string;
  Plot: string;
  Poster: string;
  Year: String;
  Runtime: string;
  Actors: string;
  Country: string;
  Language: string;
  Director: string;
  Writer: string;
  Response: boolean;
  imdbRating: string;
}

export interface IError {
  Response: string;
  Error: String;
}
export default async function getMovie(movieTitle: string): Promise<IMovie> {
  return await fetch(
    `http://www.omdbapi.com/?t=${movieTitle}&apikey=bdae4255&`
  ).then(resp => resp.json());
}
