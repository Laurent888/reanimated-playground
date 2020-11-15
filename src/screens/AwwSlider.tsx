import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Animated, {
  useAnimatedProps,
  useSharedValue,
} from 'react-native-reanimated';
import {TextInput} from 'react-native-gesture-handler';
import throttle from 'lodash.throttle';

import Container from '../components/Container';
import MySlider from '../components/MySlider';

interface AwwSliderProps {}

const MAX_VALUE = 100;
const NUMBER_PERSONS = 2;

const AwwSlider: React.FC<AwwSliderProps> = () => {
  const [value, setValue] = useState(0);
  const [numberPersons, setNumberPersons] = useState(NUMBER_PERSONS);
  const total = useSharedValue(250);

  // const animatedProps1 = useAnimatedProps(() => ({
  //   value: total.value,
  // }));

  const handleChange = throttle(
    (val) => {
      setValue(val);
    },
    50,
    {trailing: true, leading: false},
  );

  const calcultateOther = () => {
    return (MAX_VALUE - value) / (NUMBER_PERSONS - 1);
  };

  return (
    <Container align="center" justify="center">
      <MySlider onChange={handleChange} maxValue={MAX_VALUE} />

      <Text style={{fontSize: 30, color: 'blue', paddingVertical: 30}}>
        {value}
      </Text>

      {/* <Text style={{fontSize: 30, color: 'blue', paddingVertical: 30}}>
        The other pay {calcultateOther()}
      </Text> */}

      {/* <AnimatedText value={String(total.value)} animatedProps={animatedProps} /> */}
      <Button
        title="Test"
        onPress={() => (total.value = Math.ceil(Math.random() * 300))}
      />
    </Container>
  );
};

export default AwwSlider;
