import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Colors } from '@/constants/Colors';

type RootStackParamList = {
  Landing: undefined;
  paywall: undefined;
  // add other screens here
};

type Props = StackScreenProps<RootStackParamList, 'Landing'>;

export default function LandingScreen({ navigation }: Props) {
  useEffect(() => {
    // const timer = setTimeout(() => {
    //   navigation.navigate('paywall');
    // }, 2000);
    // return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>RIZZGPT hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Colors.dark.background
  },
  text: {
    fontSize: 55,
    fontWeight: 'bold',
    color:Colors.dark.secondaryText,
    fontFamily:'SyncopateBold',
    // fontFamily:'SpaceMono',
  },
});
