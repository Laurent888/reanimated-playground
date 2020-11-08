import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const DragNDrop = () => {
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.offsetX = translationX.value;
      ctx.offsetY = translationY.value;
    },
    onActive: (e, ctx) => {
      translationX.value = ctx.offsetX + e.translationX;
      translationY.value = ctx.offsetY + e.translationY;
    },
    onEnd: (e, ctx) => {
      translationX.value = withSpring(0, {damping: 12, stiffness: 120});
      translationY.value = withSpring(0, {damping: 12, stiffness: 120});
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {translateX: translationX.value},
      {translateY: translationY.value},
    ],
  }));

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </PanGestureHandler>
    </View>
  );
};

export default DragNDrop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2b2d42',
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 5,
    backgroundColor: '#56cfe1',
  },
});
