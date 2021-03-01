import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
  withSpring,
} from 'react-native-reanimated';
import {Svg, Circle} from 'react-native-svg';
import Container from '../components/Container';
import StartActivity from '../services/StartActivityTest';

const SvgScreen = () => {
  const [state, setState] = useState({});
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

  const handlePress = async () => {
    const res = await StartActivity.getAnswer();
    setState(res);
  };

  return (
    <Container>
      <View>
        <Text style={{backgroundColor: 'lightblue', padding: 10, fontSize: 15}}>
          {JSON.stringify(state)}
        </Text>
      </View>
      <Button title="NativeTest" onPress={handlePress} />
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
    </Container>
  );
};

export default SvgScreen;

const styles = StyleSheet.create({
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
