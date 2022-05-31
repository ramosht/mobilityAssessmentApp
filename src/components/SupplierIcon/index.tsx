import React from 'react';

import BoltDark from '../../../assets/logos/supplier-bolt-dark.svg';
import BoltLight from '../../../assets/logos/supplier-bolt-light.svg';
import FreenowDark from '../../../assets/logos/supplier-freenow-dark.svg';
import FreenowLight from '../../../assets/logos/supplier-freenow-light.svg';

type SupplierIconProps = {
  supplierName: string;
  size?: number;
  dark?: boolean;
};

const SupplierIcon: React.FC<SupplierIconProps> = ({
  supplierName,
  size,
  dark = true,
}) => {
  return (
    <>
      {supplierName === 'Bolt' && !dark && (
        <BoltLight height={size} width={size} />
      )}
      {supplierName === 'Bolt' && dark && (
        <BoltDark fill="#000" height={size} width={size} />
      )}
      {supplierName === 'FREENOW' && !dark && (
        <FreenowLight height={size} width={size} />
      )}
      {supplierName === 'FREENOW' && dark && (
        <FreenowDark fill="#000" height={size} width={size} />
      )}
    </>
  );
};

export default SupplierIcon;
