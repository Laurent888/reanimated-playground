import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Choices from '../screens/Choices';
import DragNDrop from '../screens/DragNDrop';
import Slider from '../screens/Slider';

export type MainStackProps = {
  Choices: undefined;
  dragNDrop: undefined;
  Slider: undefined;
  Slider1: undefined;
};

const Stack = createStackNavigator<MainStackProps>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Choices">
      <Stack.Screen
        name="Choices"
        component={Choices}
        options={{headerTitle: 'Reanimated'}}
      />
      <Stack.Screen name="dragNDrop" component={DragNDrop} />
      <Stack.Screen name="Slider" component={Slider} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
