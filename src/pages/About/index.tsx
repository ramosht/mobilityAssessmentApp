import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';

function About() {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View>
          <Text>About</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default About;
