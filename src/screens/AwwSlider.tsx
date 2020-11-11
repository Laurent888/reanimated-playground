import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Container from '../components/Container';
import MySlider from '../components/MySlider';

interface AwwSliderProps {}

export const debounce = <F extends (...args: any[]) => any>(
  func: F,
  waitFor: number,
) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  const debounced = (...args: Parameters<F>) => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => func(...args), waitFor);
  };

  return debounced as (...args: Parameters<F>) => ReturnType<F>;
};

const AwwSlider: React.FC<AwwSliderProps> = () => {
  const [value, setValue] = useState(0);
  return (
    <Container align="center" justify="center">
      <MySlider
        onComplete={(val) => console.log(val)}
        onChange={(val) => setValue(val)}
      />
      <Text style={{fontSize: 30, color: 'blue', paddingVertical: 30}}>
        {value}
      </Text>
    </Container>
  );
};

export default AwwSlider;
