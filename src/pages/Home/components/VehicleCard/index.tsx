import React from 'react';
import {useColorScheme, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {SupplierIcon, Text, VehicleIcon} from '@components';
import UserIconDark from '../../../../../assets/icons/UserIcon-dark.svg';
import UserIconLight from '../../../../../assets/icons/UserIcon-light.svg';

import * as S from './styles';

import {AvailableVehicleProps} from '@context/availableVehicles/availableVehicles.types';
type VehicleCardProps = {
  vehicle: AvailableVehicleProps;
};

const VehicleCard: React.FC<VehicleCardProps> = ({vehicle}) => {
  const theme = useTheme();
  const colorScheme = useColorScheme();

  return (
    <S.Wrapper borderColor={theme.colors.border}>
      <S.VehicleSvgWrapper>
        <VehicleIcon size={90} vehicleType={vehicle.category.vehicleType} />
      </S.VehicleSvgWrapper>
      <S.VehicleInfoWrapper>
        <View style={{justifyContent: 'space-between'}}>
          <Text
            style={{marginBottom: 8}}
            fontWeight="Semibold"
            italic
            fontSize={24}
          >
            {vehicle.category.productType}
          </Text>

          <SupplierIcon
            size={18}
            supplierName={vehicle.supplier.supplierName}
          />

          <Text
            style={{marginTop: 8}}
            fontSize={18}
            fontWeight="Regular"
            italic
          >
            {vehicle.eta} min
          </Text>
        </View>
        <View style={{justifyContent: 'space-between'}}>
          <Text fontWeight="Bold" fontSize={26} color={theme.colors.primary}>
            € {vehicle.price.amount}
          </Text>
          <S.MaxPassengersWrapper>
            {colorScheme === 'dark' ? (
              <UserIconLight width={16} height={16} />
            ) : (
              <UserIconDark width={16} height={16} />
            )}
            <Text style={{marginLeft: 8}} fontSize={20}>
              x{vehicle.product.maxPax}
            </Text>
          </S.MaxPassengersWrapper>
        </View>
      </S.VehicleInfoWrapper>
    </S.Wrapper>
  );
};

export default VehicleCard;
