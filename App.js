import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header></Header>
      <Home></Home>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop:20
  },
});
