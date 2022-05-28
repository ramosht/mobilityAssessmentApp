import React from 'react';
import {useColorScheme} from 'react-native';

import BoltDark from '../../../assets/logos/supplier-bolt-dark.svg';
import BoltLight from '../../../assets/logos/supplier-bolt-light.svg';
import FreenowDark from '../../../assets/logos/supplier-freenow-dark.svg';
import FreenowLight from '../../../assets/logos/supplier-freenow-light.svg';

type SupplierIconProps = {
  supplierName: string;
  size?: number;
};

const SupplierIcon: React.FC<SupplierIconProps> = ({supplierName, size}) => {
  const colorScheme = useColorScheme();

  return (
    <>
      {supplierName === 'Bolt' && colorScheme === 'dark' && (
        <BoltLight height={size} />
      )}
      {supplierName === 'Bolt' && colorScheme === 'light' && (
        <BoltDark height={size} />
      )}
      {supplierName === 'FREENOW' && colorScheme === 'dark' && (
        <FreenowLight height={size} />
      )}
      {supplierName === 'FREENOW' && colorScheme === 'light' && (
        <FreenowDark height={size} />
      )}
    </>
  );
};

export default SupplierIcon;
