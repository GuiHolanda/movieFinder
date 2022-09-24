import React, { useEffect, useState } from 'react';
import { IMovie } from '../helpers/httpsService';
import { useListContext } from '../helpers/AppContexts';

export default function FavoriteButton({ movie }: { movie: IMovie }) {
  const [buttonStatus, setButtonStatus] = useState<'' | 'active'>('');
  const { favoriteList, pushFunction } = useListContext();

  function handleButtonClick() {
    if (!favoriteList.includes(movie.Title)) {
      pushFunction();
      setButtonStatus('active');
    } else {
      const index = favoriteList.indexOf(movie.Title);
      favoriteList.splice(index, 1);
      setButtonStatus('');
    }
  }

  useEffect(() => {
    favoriteList.includes(movie.Title)
      ? setButtonStatus('active')
      : setButtonStatus('');
  }, [movie]);

  return (
    <button
      onClick={handleButtonClick}
      type="button"
      className={`btn btn-outline-warning ${buttonStatus} btn-floating`}
      data-mdb-ripple-color="dark"
    >
      <i className="bi bi-star"></i>
    </button>
  );
}
