import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Choices from '../screens/Choices';
import DragNDrop from '../screens/DragNDrop';

export type MainStackProps = {
  Choices: undefined;
  dragNDrop: undefined;
};

const Stack = createStackNavigator<MainStackProps>();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Choices"
        component={Choices}
        options={{headerTitle: 'Reanimated'}}
      />
      <Stack.Screen name="dragNDrop" component={DragNDrop} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
