import React from 'react';
import {StyleSheet, View} from 'react-native';
import {PanGestureHandler, TextInput} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import AnimatedText from '../components/AnimatedText';

const MAX_RANGE = 100;

const clamp = (value, lowerBound, upperBound) => {
  'worklet';
  return Math.min(Math.max(value, lowerBound), upperBound);
};

const Slider = () => {
  const translationX = useSharedValue(1);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.offsetX = translationX.value;
    },
    onActive: (e, ctx) => {
      translationX.value = clamp(ctx.offsetX + e.translationX, 0, 280);
    },
  });

  const translateX = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translationX.value}, {translateY: -10}],
    };
  });

  const stepText = useDerivedValue(() => {
    const sliderRange = 280;
    const oneStepValue = sliderRange / MAX_RANGE;

    return String(Math.ceil(translationX.value / oneStepValue));
  });

  return (
    <View style={styles.container}>
      <View style={styles.sliderTrack}>
        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <Animated.View style={[styles.knob, translateX]} />
        </PanGestureHandler>
      </View>
      <View style={{backgroundColor: '#fff', marginVertical: 50}}>
        <AnimatedText text={stepText} />
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2b2d42',
  },
  sliderTrack: {
    width: 300,
    height: 9,
    borderRadius: 10,
    backgroundColor: '#ffe5d9',
  },
  knob: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ee6c4d',
  },
});
