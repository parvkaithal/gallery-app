import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './app/components/Header';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
