import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import HomeMap from './screens/HomeMap';
import FlashMessage from 'react-native-flash-message';
import Calculator from './screens/Calculator';

export default function App() {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex: 1}}>
      <Calculator />
      </KeyboardAvoidingView>
      <FlashMessage position="top" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});