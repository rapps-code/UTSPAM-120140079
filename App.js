import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screen/Home';
import Song from './screen/Song';
import play1 from './screen/play1';
import play2 from './screen/play2';
import myprofile from './screen/myprofile';

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Song" component={Song} options={{ headerShown: false }}/>
        <Stack.Screen name="play1" component={play1} options={{ headerShown: false }}/>
        <Stack.Screen name="play2" component={play2} options={{ headerShown: false }}/>
        <Stack.Screen name="myprofile" component={myprofile} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}