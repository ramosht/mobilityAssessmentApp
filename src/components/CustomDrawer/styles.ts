import {ThemeProps} from '../../../src/style/globalStyle';
import styled from 'styled-components/native';

type WrapperProps = {
  theme: ThemeProps;
};
export const Wrapper = styled.View<WrapperProps>`
  background-color: ${props => props.theme.drawerBackground};
  flex: 1;
`;

type ListItemProps = {
  separator?: boolean;
};
export const ListItem = styled.View<ListItemProps>`
  border-top-width: ${props => (props.separator ? 0.5 : 0)}px;
  border-color: #aaa;
`;

type ListItemContentProps = {
  primaryColor: string;
  active?: boolean;
};
export const ListItemContent = styled.View<ListItemContentProps>`
  padding: 16px;
  background-color: ${props =>
    props.active ? `${props.primaryColor}50` : 'transparent'}};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
