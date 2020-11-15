import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Svg, Circle} from 'react-native-svg';

interface CircleProps {
  value: number;
}

const PRIMARY = '#264653';
const SECONDARY = '#e9c46a';
const PADDING = 20;

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircleComponent: React.FC<CircleProps> = React.memo(({value = 0}) => {
  console.log('Render circle');
  const circumference = 120 * 2 * Math.PI;
  const animatedProgress = useSharedValue(0);

  useEffect(() => {
    animatedProgress.value = value;
  }, [value]);

  const progress = useDerivedValue(() => {
    return circumference - (animatedProgress.value * circumference) / 100;
  });

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: withTiming(progress.value, {
      duration: 1000,
      easing: Easing.out(Easing.ease),
    }),
  }));

  return (
    <Svg width="100%" height="100%">
      <Circle cx="50%" cy="50%" r="45%" stroke={PRIMARY} strokeWidth="30" />
      <AnimatedCircle
        cx="50%"
        cy="50%"
        r="45%"
        stroke={SECONDARY}
        strokeWidth="30"
        strokeDasharray={circumference}
        animatedProps={animatedProps}
      />
    </Svg>
  );
});

export default CircleComponent;
