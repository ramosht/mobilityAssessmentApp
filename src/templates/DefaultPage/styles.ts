import {ThemeProps} from '../../../src/style/globalStyle';
import styled from 'styled-components/native';

type SafeAreaViewProps = {
  theme: ThemeProps;
};
export const SafeAreaView = styled.SafeAreaView<SafeAreaViewProps>`
  flex: 1;
  background-color: ${props => props.theme.background};
`;
