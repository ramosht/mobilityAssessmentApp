import React, { createContext, useContext, useState } from 'react';

import {
  AvailableVehicleProps,
  AvailableVehiclesContextState,
  AvailableVehicleProviderProps,
} from './availableVehicles.types';

const AvailableVehiclesContext = createContext<AvailableVehiclesContextState>({
  availableVehicles: [],
  setAvailableVehicles: () => {},
});

const AvailableVehicleProvider: React.FC<AvailableVehicleProviderProps> = ({ children }) => {
  const [availableVehicles, setAvailableVehicles] = useState<Array<AvailableVehicleProps>>([]);

  const providerValue: AvailableVehiclesContextState = {
    availableVehicles,
    setAvailableVehicles,
  };

  return (
    <AvailableVehiclesContext.Provider value={providerValue}>
      {children}
    </AvailableVehiclesContext.Provider>
  );
};

const useAvailableVehicles = () => {
  return useContext(AvailableVehiclesContext);
};

export { useAvailableVehicles, AvailableVehicleProvider };
