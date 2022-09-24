import React, { useContext } from 'react';

export interface IFavoritListContext {
  favoriteList: string[];
  pushFunction: () => void;
}

export const listContext = React.createContext<IFavoritListContext>({
  favoriteList: [],
  pushFunction: () => {},
});

export function useListContext() {
  return useContext(listContext);
}
