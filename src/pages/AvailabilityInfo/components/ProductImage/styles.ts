import styled from 'styled-components/native';

export const Wrapper = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

type VehicleIconWrapperProps = {
  borderColor: string;
};
export const VehicleIconWrapper = styled.View<VehicleIconWrapperProps>`
  width: 120px;
  border-radius: 120px;
  overflow: hidden;
  border-width: 2px;
  border-color: ${props => props.borderColor};
`;

type SupplierLogoWrapperProps = {
  backgroundColor: string;
  borderColor: string;
};
export const SupplierLogoWrapper = styled.View<SupplierLogoWrapperProps>`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${props => props.backgroundColor};
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: ${props => props.borderColor};
  border-radius: 40px;
`;
