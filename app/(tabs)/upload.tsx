import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function UploadScreen() {


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Upload your screenshot</Text>
      {/* <Button title="Upload" onPress={() => navigation.navigate('home2')} /> */}
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
