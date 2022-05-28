import React from 'react';

export type AvailableVehicleProviderProps = {
  children: React.ReactNode;
};

export type AvailableVehicleProps = {
  availabilityId: string;
  eta: number;
  supplier: {
    supplierName: string;
    supplierKey: string;
  };
  product: {
    maxPax: number;
    bags: {max: number; large: number; small: number};
    maxSeats: number;
  };
  price: {
    amount: number;
    currency: string;
  };
  category: {
    productType: string;
    vehicleType: string;
    subCategory: string;
  };
};

export type AvailableVehiclesContextState = {
  availableVehicles: Array<AvailableVehicleProps>;
  setAvailableVehicles: React.Dispatch<
    React.SetStateAction<Array<AvailableVehicleProps>>
  >;
};
