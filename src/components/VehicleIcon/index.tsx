import React from 'react';

import Accessible from '../../../assets/logos/vehicle-other-accessible.svg';
import Eco from '../../../assets/logos/vehicle-other-eco.svg';
import Minibus from '../../../assets/logos/vehicle-standard-minibus.svg';
import Sedan from '../../../assets/logos/vehicle-standard-sedan.svg';
import SUV from '../../../assets/logos/vehicle-standard-suv.svg';

type VehicleIconProps = {
  vehicleType: string;
  size?: number;
};

const VehicleIcon: React.FC<VehicleIconProps> = ({vehicleType, size = 64}) => {
  return (
    <>
      {vehicleType === 'SEDAN' && <Sedan height={size} length={size} />}
      {vehicleType === 'SUV' && <SUV height={size} length={size} />}
      {vehicleType === 'ECO' && <Eco height={size} length={size} />}
      {vehicleType === 'MINIBUS' && <Minibus height={size} length={size} />}
      {vehicleType === 'ACCESSIBLE' && (
        <Accessible height={size} length={size} />
      )}
    </>
  );
};

export default VehicleIcon;
