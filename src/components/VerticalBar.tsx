import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const VerticalBar = ({height}) => {
  const heightBar = useSharedValue(0);

  useEffect(() => {
    heightBar.value = height;
  }, [height]);

  const animatedHeight = useAnimatedStyle(() => ({
    height: withTiming(heightBar.value, {
      duration: 400,
      easing: Easing.out(Easing.ease),
    }),
  }));

  return <Animated.View style={[styles.bar, animatedHeight]} />;
};

export default VerticalBar;

const styles = StyleSheet.create({
  bar: {
    backgroundColor: 'blue',
    width: 20,
    marginHorizontal: 5,
  },
});
