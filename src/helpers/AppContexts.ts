import React, { useContext } from 'react';
import { IMovie } from './httpsService';

export interface IFavoriteItem {
  Poster: string;
  Title: String;
}

export interface IFavoritListContext {
  favoriteList: IMovie[];
}

export const listContext = React.createContext<IFavoritListContext>({
  favoriteList: [],
});

export function useListContext() {
  return useContext(listContext);
}
