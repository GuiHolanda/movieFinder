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
      <div className="text-center mb-4">
        <h2 className="title">Get information of any movie</h2>
        <h5 className="footerFont info m-auto fw-light">
          Find out a bunch of curious informations about any movie you like. You
          can also favorite the films you like the most
        </h5>
      </div>
      <form
        className="d-sm-flex m-auto info needs-validation "
        onSubmit={handleButtonClick}
      >
        <input
          onChange={handleInputChange}
          autoFocus
          value={movie}
          className="form-control smallFont mb-3 mb-sm-0"
          type="text"
          name="movieInput"
          id="movieInput"
          placeholder="Enter the movie's title"
          required
        />
        <div className="ms-3 d-flex justify-content-center">
          <button className="btn btn-danger smallFont me-2">Search</button>
          <button
            className="btn smallFont btn-danger"
            type="button"
            onClick={handleResetButtonClick}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
