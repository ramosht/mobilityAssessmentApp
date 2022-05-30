import React from 'react';
import {TouchableOpacity, useColorScheme} from 'react-native';

import * as S from './styles';

import CartrawlerDarkSVG from '../../../assets/logos/cartrawler-dark.svg';
import CartrawlerLightSVG from '../../../assets/logos/cartrawler-light.svg';
import {useNavigation, useTheme} from '@react-navigation/native';
import Icon from '@components/Icon';

type NavbarProps = {
  goBack: boolean;
};

const Navbar: React.FC<NavbarProps> = ({goBack}) => {
  const theme = useTheme();
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  return (
    <S.Wrapper borderColor={theme.colors.border}>
      {goBack ? (
        <S.Column>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon size={26} family="Feather" name="arrow-left" />
          </TouchableOpacity>
        </S.Column>
      ) : (
        <S.Column>
          {colorScheme === 'dark' ? (
            <CartrawlerLightSVG width={140} />
          ) : (
            <CartrawlerDarkSVG width={140} />
          )}

          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon size={26} family="Feather" name="menu" />
          </TouchableOpacity>
        </S.Column>
      )}
    </S.Wrapper>
  );
};

export default Navbar;
