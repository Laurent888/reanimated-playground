import React, {useEffect} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
  withSpring,
} from 'react-native-reanimated';
import {Svg, Circle} from 'react-native-svg';

const SvgScreen = () => {
  const rotationZ = useSharedValue(0);

  const startRotation = () => {
    rotationZ.value = withRepeat(
      withTiming(360, {duration: 4000, easing: Easing.linear}),
      -1,
    );
  };

  const reset = () => {
    rotationZ.value = withSpring(0, {damping: 14});
  };

  const rotateAnimation = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotationZ.value}deg`}],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.svgContainer, rotateAnimation]}>
        <Svg height="200" width="200" viewBox="0 0 200 200">
          <Circle
            cx="50"
            cy="50"
            r="47"
            fill="#fca311"
            stroke="#14213d"
            strokeWidth={3}
          />
          <Circle
            cx="150"
            cy="150"
            r="47"
            fill="#fca311"
            stroke="#14213d"
            strokeWidth={3}
          />
          <Circle
            cx="150"
            cy="50"
            r="47"
            fill="#14213d"
            stroke="#fca311"
            strokeWidth={3}
          />
          <Circle
            cx="50"
            cy="150"
            r="47"
            fill="#14213d"
            stroke="#fca311"
            strokeWidth={3}
          />
        </Svg>
      </Animated.View>
      <View style={styles.buttonContainer}>
        <Button title="Start rotation" onPress={startRotation} />
        <Button title="Reset" onPress={reset} />
      </View>
    </View>
  );
};

export default SvgScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  svgContainer: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
});
