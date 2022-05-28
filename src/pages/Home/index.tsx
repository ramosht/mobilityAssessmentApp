import {useAvailableVehicles} from '@context/availableVehicles/availableVehicles.context';
import {useFilter} from '@context/filter/filter.context';
import React, {useEffect} from 'react';

// Products
import productsJson from '../../../assets/availability.json';

// Components
import DefaultPage from '../../templates/DefaultPage';
import VehicleCard from './components/VehicleCard';

import * as S from './styles';

function Home() {
  const {availableVehicles, setAvailableVehicles} = useAvailableVehicles();
  const {setFilter} = useFilter();

  useEffect(() => {
    const sortedProductsByETA = productsJson.sort(
      (vehicleA, vehicleB) => vehicleA.eta - vehicleB.eta,
    );

    setAvailableVehicles(sortedProductsByETA);
    setFilter({filter: 'eta', order: 'asc'});
  }, [setAvailableVehicles, setFilter]);

  return (
    <DefaultPage>
      <S.Wrapper>
        {availableVehicles.map(vehicle => (
          <VehicleCard key={vehicle.availabilityId} vehicle={vehicle} />
        ))}
      </S.Wrapper>
    </DefaultPage>
  );
}

export default Home;
