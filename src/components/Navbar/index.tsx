import React from 'react';
import {useColorScheme} from 'react-native';

import * as S from './styles';

import CartrawlerDarkSVG from '../../../assets/logos/cartrawler-dark.svg';
import CartrawlerLightSVG from '../../../assets/logos/cartrawler-light.svg';
import {useTheme} from '@react-navigation/native';

const Navbar = () => {
  const theme = useTheme();

  return (
    <S.Wrapper borderColor={theme.colors.border}>
      <S.Column>
        {useColorScheme() === 'dark' ? (
          <CartrawlerLightSVG width={140} />
        ) : (
          <CartrawlerDarkSVG width={140} />
        )}
      </S.Column>
    </S.Wrapper>
  );
};

export default Navbar;
