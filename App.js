import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeMap from './screens/HomeMap';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeMap />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});