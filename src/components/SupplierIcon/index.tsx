import {useAppColorScheme} from '@context/theme/theme.context';
import React from 'react';

import BoltDark from '../../../assets/logos/supplier-bolt-dark.svg';
import BoltLight from '../../../assets/logos/supplier-bolt-light.svg';
import FreenowDark from '../../../assets/logos/supplier-freenow-dark.svg';
import FreenowLight from '../../../assets/logos/supplier-freenow-light.svg';

type SupplierIconProps = {
  supplierName: string;
  size?: number;
};

const SupplierIcon: React.FC<SupplierIconProps> = ({supplierName, size}) => {
  const {appTheme} = useAppColorScheme();

  return (
    <>
      {supplierName === 'Bolt' && appTheme === 'dark' && (
        <BoltLight height={size} width={size} />
      )}
      {supplierName === 'Bolt' && appTheme === 'light' && (
        <BoltDark height={size} width={size} />
      )}
      {supplierName === 'FREENOW' && appTheme === 'dark' && (
        <FreenowLight height={size} width={size} />
      )}
      {supplierName === 'FREENOW' && appTheme === 'light' && (
        <FreenowDark height={size} width={size} />
      )}
    </>
  );
};

export default SupplierIcon;
