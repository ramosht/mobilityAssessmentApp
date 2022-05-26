// Style file using Styled Components
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text``;

export const Button = styled.TouchableOpacity`
  border-radius: 4px;
  margin: 4px;
`;

type ButtonTextProps = {
  bgColor: string;
};
export const ButtonText = styled.Text<ButtonTextProps>`
  color: ${(props) => props.bgColor || '#000000'};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
`;
