import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import * as S from './styles';

// Components
import Navbar from '@components/Navbar';
import {useAppColorScheme} from '@context/theme/theme.context';

type DefaultPageProps = {
  children: React.ReactNode;
  showNavbar?: boolean;
  goBack?: boolean;
};

const DefaultPage: React.FC<DefaultPageProps> = ({
  children,
  showNavbar = true,
  goBack = false,
}) => {
  const {theme} = useAppColorScheme();

  return (
    <S.SafeAreaView theme={theme}>
      <StatusBar />
      {showNavbar && <Navbar goBack={goBack} />}
      <ScrollView
        contentContainerStyle={styles.scrollViewContentContainerStyle}>
        {children}
      </ScrollView>
    </S.SafeAreaView>
  );
};

const styles = {
  scrollViewContentContainerStyle: {
    flexGrow: 1,
    padding: 16,
  },
};

export default DefaultPage;
