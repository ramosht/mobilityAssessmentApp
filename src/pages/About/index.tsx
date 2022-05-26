import { useNavigation, useTheme } from '@react-navigation/native';
import React from 'react';

import DefaultPage from '../../templates/DefaultPage';

import * as S from './styles';

function About() {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <DefaultPage>
      <S.Wrapper>
        <S.Title>About</S.Title>
        <S.Button onPress={() => navigation.navigate('RandomPage')}>
          <S.ButtonText bgColor={theme.colors.primary}>Go to RandomPage</S.ButtonText>
        </S.Button>
      </S.Wrapper>
    </DefaultPage>
  );
}

export default About;
