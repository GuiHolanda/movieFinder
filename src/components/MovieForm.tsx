import React, { useState } from 'react';

export default function MovieForm({
  onSubmitMovie,
  onResetSearch,
}: {
  onSubmitMovie: (movie: string) => void;
  onResetSearch: (movie: string) => void;
}) {
  const [movie, setMovie] = useState<string>('');

  function handleInputChange(evt: any) {
    const movieTitle = evt.currentTarget.value;
    setMovie(movieTitle);
  }

  function handleButtonClick(evt: React.FormEvent) {
    evt.preventDefault();
    onSubmitMovie(movie);
    setMovie('');
  }

  function handleResetButtonClick() {
    setMovie('');
    onResetSearch('');
  }

  return (
    <div className="container text-center my-4">
      <h2>Get information of any movie</h2>
      <form
        className=" d-sm-flex m-auto needs-validation align-items-center "
        onSubmit={handleButtonClick}
      >
        <input
          onChange={handleInputChange}
          autoFocus
          value={movie}
          className="form-control mb-3 mb-sm-0"
          type="text"
          name="movieInput"
          id="movieInput"
          placeholder="Enter the movie's title"
          required
        />
        <div className="ms-3 d-flex justify-content-center">
          <button className="btn btn-danger ms-0">Search</button>
          <button
            className="btn btn-danger"
            type="button"
            onClick={handleResetButtonClick}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
