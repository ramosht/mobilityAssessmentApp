import { useNavigation, useTheme } from '@react-navigation/native';
import React from 'react';

import DefaultPage from '../../templates/DefaultPage';

import * as S from './styles';

function Home() {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <DefaultPage>
      <S.Wrapper>
        <S.Title>Home</S.Title>
        <S.Button onPress={() => navigation.navigate('About')}>
          <S.ButtonText bgColor={theme.colors.primary}>Go to About</S.ButtonText>
        </S.Button>
      </S.Wrapper>
    </DefaultPage>
  );
}

export default Home;
