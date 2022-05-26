import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

type DefaultPageProps = {
  children: React.ReactNode;
};

const DefaultPage: React.FC<DefaultPageProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <StatusBar />
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
  },
};

export default DefaultPage;
