import React, { useEffect, useState } from 'react';
import { IMovie } from '../helpers/httpsService';
import { useListContext } from '../helpers/AppContexts';

export default function FavoriteButton({ movie }: { movie: IMovie }) {
  const [buttonStatus, setButtonStatus] = useState<'' | 'active'>('');
  const { favoriteList } = useListContext();

  function handleButtonClick() {
    if (!favoriteList.some(listMovie => listMovie.Title === movie.Title)) {
      favoriteList.push(movie);
      setButtonStatus('active');
    } else {
      const index = favoriteList.indexOf(movie);
      favoriteList.splice(index, 1);
      setButtonStatus('');
    }
  }

  useEffect(() => {
    favoriteList.some(listMovie => listMovie.Title === movie.Title)
      ? setButtonStatus('active')
      : setButtonStatus('');
  }, [movie]);

  return (
    <button
      onClick={handleButtonClick}
      type="button"
      className={`btn btn-outline-danger btn-sm align-self-center m-0 px-1 ${buttonStatus} btn-floating`}
      data-mdb-ripple-color="dark"
    >
      <i className="bi bi-heart"></i>
    </button>
  );
}
