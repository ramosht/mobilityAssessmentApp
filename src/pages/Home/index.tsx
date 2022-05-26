import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';

function Home() {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View>
          <Text>Home</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
