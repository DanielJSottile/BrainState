import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import LandingStyles from './LandingStyles';

const Landing = ({ navigation }: any) => {
  return (
    <View style={LandingStyles.container}>
      <Image style={LandingStyles.logo} source={{ uri: '' }} />
      <Text>BrainState</Text>
      <Text>A mind-mapping application for your mobile device!</Text>
      <Text>Make A New Map!</Text>
      <Button title="+ New Map" onPress={() => navigation.navigate('Main')} />
      <Text>Load A Previous Map!</Text>
      <Button title="Load Map" onPress={() => navigation.navigate('Load')} />
    </View>
  );
};

export default Landing;
