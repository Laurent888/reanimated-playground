import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Choices from '../screens/Choices';
import DragNDrop from '../screens/DragNDrop';
import Slider from '../screens/Slider';
import BarGraph from '../screens/BarGraph';
import SvgNavigator from './SvgNavigator';
import PieChart from '../screens/PieChart';
import AwwSlider from '../screens/AwwSlider';
import Practice from '../screens/Practice';

export type MainStackProps = {
  Choices: undefined;
  dragNDrop: undefined;
  Slider: undefined;
  PieChart: undefined;
  BarGraph: undefined;
  Svg: undefined;
  AwwSlider: undefined;
  Practice: undefined;
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
      <Stack.Screen name="PieChart" component={PieChart} />
      <Stack.Screen
        name="BarGraph"
        component={BarGraph}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen name="Svg" component={SvgNavigator} />
      <Stack.Screen
        name="AwwSlider"
        component={AwwSlider}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name="Practice"
        component={Practice}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
