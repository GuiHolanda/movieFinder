import React, { useEffect, useState } from 'react';
import { IMovie } from '../helpers/httpsService';

export default function RatingStars({ movie }: { movie: IMovie }) {
  const [starList, setStarList] = useState<number[]>([]);

  const roundRating = Math.round((parseFloat(movie.imdbRating) * 2) / 2) / 2;
  const rest = roundRating - Math.floor(roundRating);
  useEffect(() => {
    const newStarList: any[] = [];
    for (let index = 0; index < Math.floor(roundRating); index++) {
      newStarList.push(Math.floor(roundRating));
    }
    if (rest !== 0) {
      newStarList.push(rest);
    }
    setStarList(newStarList);
  }, [movie]);

  return (
    <div className="ms-2">
      {starList.map((star, index) => {
        return star !== 0.5 ? (
          <i key={index} className="bi bi-star-fill text-warning"></i>
        ) : (
          <i key={index} className="bi bi-star-half text-warning"></i>
        );
      })}
    </div>
  );
}
