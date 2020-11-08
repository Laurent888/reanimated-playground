import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const DragNDrop = () => {
  return (
    <View>
      <Text>Drag n drop</Text>
    </View>
  );
};

export default DragNDrop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 5,
    backgroundColor: '#56cfe1',
  },
});
