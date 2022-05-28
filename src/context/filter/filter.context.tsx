import React, { useContext, useState } from 'react';

import { FilterProps, FilterStateContext, FilterProviderProps } from './filter.types';

const FilterContext = React.createContext<FilterStateContext>({
  filter: { filter: 'eta', order: 'asc' },
  setFilter: () => {},
});

const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [filter, setFilter] = useState<FilterProps>({
    filter: 'eta',
    order: 'asc',
  });

  const providerValue: FilterStateContext = {
    filter,
    setFilter,
  };

  return <FilterContext.Provider value={providerValue}>{children}</FilterContext.Provider>;
};

const useFilter = () => {
  return useContext(FilterContext);
};

export { useFilter, FilterProvider };
