import React, {useCallback} from 'react';
import {useRoute} from '@react-navigation/native';

import * as S from './styles';

import {Text} from '@components';
import DefaultPage from '@templates/DefaultPage';
import ProductImage from './components/ProductImage';

import {AvailableVehicleProps} from '@context/availableVehicles/availableVehicles.types';

const AvailabilityInfo: React.FC = () => {
  const route = useRoute();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const availableVehicle: AvailableVehicleProps =
    route.params?.availableVehicle;

  const sanitizeSubCategory = useCallback((subCategory: string) => {
    const subCategorySplitted = subCategory.split('_');

    const wordsWithCorrectCapitalization: Array<string> =
      subCategorySplitted.map((word: string) => {
        return word.charAt(0) + word.toLowerCase().slice(1);
      });

    return wordsWithCorrectCapitalization.join(' ');
  }, []);

  return (
    <DefaultPage showNavbar goBack>
      <S.Wrapper>
        <ProductImage
          vehicleType={availableVehicle.category.vehicleType}
          supplierName={availableVehicle.supplier.supplierName}
        />
        <Text
          style={{marginTop: 22}}
          fontSize={32}
          fontWeight="Semibold"
          italic>
          {availableVehicle.category.vehicleType}
        </Text>
        <Text style={{marginTop: 8, opacity: 0.75}} fontSize={20}>
          {availableVehicle.supplier.supplierName}
        </Text>

        <S.TableOfInformation>
          <S.Cell>
            <S.CellTitle>Estimated Time of Arrival</S.CellTitle>
            <S.CellDescription>{availableVehicle.eta} min</S.CellDescription>
          </S.Cell>
          <S.Cell>
            <S.CellTitle>Price</S.CellTitle>
            <S.CellDescription>
              € {availableVehicle.price.amount}
            </S.CellDescription>
          </S.Cell>
          <S.Cell>
            <S.CellTitle>Category</S.CellTitle>
            <S.CellDescription>
              {sanitizeSubCategory(availableVehicle.category.subCategory)}
            </S.CellDescription>
          </S.Cell>
          <S.Cell>
            <S.CellTitle>Max seats</S.CellTitle>
            <S.CellDescription>
              {availableVehicle.product.maxSeats}
            </S.CellDescription>
          </S.Cell>
        </S.TableOfInformation>
      </S.Wrapper>
    </DefaultPage>
  );
};

export default AvailabilityInfo;
