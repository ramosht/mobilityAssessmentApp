import React from 'react';
import {TouchableOpacity} from 'react-native';

import * as S from './styles';

import CartrawlerDarkSVG from '../../../assets/logos/cartrawler-dark.svg';
import CartrawlerLightSVG from '../../../assets/logos/cartrawler-light.svg';
import {useNavigation} from '@react-navigation/native';
import Icon from '@components/Icon';
import {useAppColorScheme} from '@context/theme/theme.context';

type NavbarProps = {
  goBack: boolean;
};

const Navbar: React.FC<NavbarProps> = ({goBack}) => {
  const {theme} = useAppColorScheme();
  const {appTheme} = useAppColorScheme();
  const navigation = useNavigation();

  return (
    <S.Wrapper borderColor={theme.borderColor}>
      {goBack ? (
        <S.Column>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon size={26} family="Feather" name="arrow-left" />
          </TouchableOpacity>
        </S.Column>
      ) : (
        <S.Column>
          {appTheme === 'dark' ? (
            <CartrawlerLightSVG width={140} />
          ) : (
            <CartrawlerDarkSVG width={140} />
          )}

          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon size={26} family="Feather" name="menu" color={theme.text} />
          </TouchableOpacity>
        </S.Column>
      )}
    </S.Wrapper>
  );
};

export default Navbar;
