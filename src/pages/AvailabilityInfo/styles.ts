import {Text} from '@components';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  align-items: center;
`;

export const TableOfInformation = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Cell = styled.View`
  width: 50%;
  align-items: center;
  padding: 12px;
`;

export const CellTitle = styled(Text)`
  font-size: 16px;
  text-align: center;
`;

export const CellDescription = styled(Text)`
  font-size: 22px;
  text-align: center;
  margin-top: 8px;
`;
