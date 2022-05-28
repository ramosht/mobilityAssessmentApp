import styled from 'styled-components/native';

type WrapperProps = {
  borderColor: string;
};
export const Wrapper = styled.TouchableOpacity<WrapperProps>`
  flex-direction: row;
  border-width: 1px;
  border-color: ${(props) => props.borderColor};
  margin-vertical: 8px;
  padding: 0;
  border-radius: 16px;
  overflow: hidden;
`;

export const VehicleSvgWrapper = styled.View`
  width: 90px;
  justify-content: flex-end;
`;

export const VehicleInfoWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  padding-right: 16px;
  padding-vertical: 16px;
`;

export const MaxPassengersWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
