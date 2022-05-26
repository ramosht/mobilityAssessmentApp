import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';

function RandomPage() {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View>
          <Text>RandomPage</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RandomPage;
