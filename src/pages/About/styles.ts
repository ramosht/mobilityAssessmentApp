// Style file using Styled Components
import {Text} from '@components';
import {ThemeProps} from '../../../src/style/globalStyle';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
`;

type TitleProps = {
  theme: ThemeProps;
};
export const Title = styled(Text)<TitleProps>`
  font-size: 32px;
  margin-bottom: 12px;
  margin-top: 24px;
`;

export const ProfilePictureWrapper = styled.View`
  margin-top: 12px;
  margin-bottom: 18px;
  align-items: center;
`;

type ProfilePictureProps = {
  size: number;
};
export const ProfilePicture = styled.Image<ProfilePictureProps>`
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  border-radius: ${({size}) => size}px;
  overflow: hidden;
`;

export const Links = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 16px;
`;

export const LinkWrapper = styled.TouchableOpacity``;
