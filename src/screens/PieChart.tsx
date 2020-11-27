import React from 'react';
import {Button} from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedProps,
} from 'react-native-reanimated';
import {Svg, Circle} from 'react-native-svg';

import Container from '../components/Container';

const RADIUS = 70;
const STROKE = 30;

interface PieChartProps {
  value?: number;
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const VALUE = 60;

const PieChart: React.FC<PieChartProps> = () => {
  const animatedValue = useSharedValue(0);
  const circumferancePie = 2 * Math.PI * RADIUS;

  const animatedOffset = useAnimatedProps(() => ({
    strokeDashoffset: withTiming(
      circumferancePie - (circumferancePie * animatedValue.value) / 100,
      {duration: 500, easing: Easing.out(Easing.ease)},
    ),
  }));

  const _startAnimation = () => {
    animatedValue.value = VALUE;
  };

  const _reset = () => {
    animatedValue.value = 0;
  };
  return (
    <Container justify="center" align="center">
      <Svg width="200" height="200" viewBox="0 0 200 200">
        <Circle
          cx="100"
          cy="100"
          r={RADIUS}
          strokeWidth={STROKE}
          stroke="#bc6c25"
          strokeOpacity=".3"
        />
        <AnimatedCircle
          cx="100"
          cy="100"
          r={RADIUS}
          strokeWidth={STROKE}
          stroke="#bc6c25"
          strokeOpacity="1"
          strokeDasharray={circumferancePie}
          animatedProps={animatedOffset}
        />
      </Svg>

      <Button title="Start animation" onPress={_startAnimation} />
      <Button title="Reset" onPress={_reset} />
    </Container>
  );
};

export default PieChart;
