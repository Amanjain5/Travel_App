import React from 'react';
import {Text, SafeAreaView} from 'react-native';

const AttractionDetails = (routeData) => {
  const {route} = routeData;

  console.log('route data =', route);

  return (
    <SafeAreaView>
      <Text>{route.name}</Text>
    </SafeAreaView>
  );
};

export default AttractionDetails;
