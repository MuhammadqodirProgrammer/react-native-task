import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home a screenshot</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'pink',
    fontSize: 40,
  },
});
