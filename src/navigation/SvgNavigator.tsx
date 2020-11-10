import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SvgChoices from '../screens/SvgChoices';
import SvgScreen from '../screens/Svg';
import Shapes from '../screens/Shapes';

const Stack = createStackNavigator();

const SvgNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="svgChoices">
      <Stack.Screen name="svgChoices" component={SvgChoices} />
      <Stack.Screen name="rotatingCircles" component={SvgScreen} />
      <Stack.Screen name="svgShapes" component={Shapes} />
    </Stack.Navigator>
  );
};

export default SvgNavigator;
