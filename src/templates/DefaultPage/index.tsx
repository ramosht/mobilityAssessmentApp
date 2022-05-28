import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

// Components
import Navbar from '@components/Navbar';

type DefaultPageProps = {
  children: React.ReactNode;
  showNavbar?: boolean;
};

const DefaultPage: React.FC<DefaultPageProps> = ({ children, showNavbar = true }) => {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <StatusBar />
      {showNavbar && <Navbar />}
      <ScrollView contentContainerStyle={styles.scrollViewContentContainerStyle}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  safeAreaStyle: {
    flex: 1,
  },
  scrollViewContentContainerStyle: {
    flexGrow: 1,
    padding: 16,
  },
};

export default DefaultPage;
