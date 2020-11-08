import React, {useState} from 'react';
import {Button, Dimensions, StyleSheet, Text, View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import VerticalBar from '../components/VerticalBar';

const {width: WIDTH} = Dimensions.get('window');

const DATA = [3, 6, 4, 2, 6, 3, 7, 3, 5];

const BarGraph = () => {
  const [show, setShow] = useState(false);

  const startAnimation = () => {
    setShow(true);
  };

  const reset = () => {
    setShow(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.graphContainer}>
        {DATA.map((item, index) => {
          return (
            <VerticalBar
              key={`${item}-${index}`}
              height={show ? item * 30 : 0}
            />
          );
        })}
      </View>
      <View style={styles.btnContainer}>
        <Button title="Start" onPress={startAnimation} color="#fff" />
      </View>
      <View style={styles.btnContainer}>
        <Button title="Reset" onPress={reset} color="#fff" />
      </View>
    </View>
  );
};

export default BarGraph;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  graphContainer: {
    width: WIDTH,
    height: 200,
    paddingHorizontal: 10,
    backgroundColor: '#cccc',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  bar: {
    backgroundColor: 'blue',
    width: 20,
    marginHorizontal: 5,
  },
  btnContainer: {
    marginVertical: 30,
    width: 80,
    borderRadius: 4,
    backgroundColor: '#5e60ce',
  },
});
