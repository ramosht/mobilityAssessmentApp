import React from 'react';

import {SupplierIcon, VehicleIcon} from '@components';

import * as S from './styles';
import {useTheme} from '@react-navigation/native';

type ProductImage = {
  vehicleType: string;
  supplierName: string;
};

const ProductImage: React.FC<ProductImage> = ({vehicleType, supplierName}) => {
  const theme = useTheme();

  return (
    <S.Wrapper>
      <S.VehicleIconWrapper borderColor={theme.colors.border}>
        <VehicleIcon size={120} vehicleType={vehicleType} />
      </S.VehicleIconWrapper>
      <S.SupplierLogoWrapper
        backgroundColor={theme.colors.background}
        borderColor={theme.colors.border}>
        <SupplierIcon size={20} supplierName={supplierName} />
      </S.SupplierLogoWrapper>
    </S.Wrapper>
  );
};

export default ProductImage;
