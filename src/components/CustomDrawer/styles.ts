import styled from 'styled-components/native';

export const Wrapper = styled.View``;

export const ListItem = styled.View`
  margin-bottom: 4px;
`;

type ListItemContentProps = {
  primaryColor: string;
  active?: boolean;
};
export const ListItemContent = styled.View<ListItemContentProps>`
  padding: 16px;
  background-color: ${props =>
    props.active ? `${props.primaryColor}50` : 'transparent'}}
`;
