import React from 'react';

export type FilterProviderProps = {
  children: React.ReactNode;
};

export type FilterProps = {
  filter: 'eta' | 'time' | 'passengers';
  order: 'asc' | 'desc';
};

export type FilterStateContext = {
  filter: FilterProps;
  setFilter: React.Dispatch<React.SetStateAction<FilterProps>>;
};
