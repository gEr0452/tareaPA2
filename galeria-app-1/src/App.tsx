import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GaleriaScreen from './screens/GaleriaScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Galería">
        <Stack.Screen name="Galería" component={GaleriaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;