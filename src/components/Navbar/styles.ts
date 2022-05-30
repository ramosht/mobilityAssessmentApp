import styled from 'styled-components/native';

type WrapperProps = {
  borderColor: string;
};
export const Wrapper = styled.View<WrapperProps>`
  padding: 16px;
  border-bottom-width: 1px;
  border-color: ${({borderColor}) => borderColor};
`;

export const Column = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
