import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Svg, Line, Polyline} from 'react-native-svg';

import Container from '../components/Container';

const Shapes = () => {
  return (
    <Container>
      <View style={styles.content}>
        <Svg width="50" height="50" viewBox="0 0 50 50">
          <Line y1="3" x1="0" y2="3" x2="25" strokeWidth="3" stroke="#43aa8b" />
          <Line
            y1="10"
            x1="0"
            y2="10"
            x2="15"
            strokeWidth="3"
            stroke="#43aa8b"
          />
          <Line
            y1="17"
            x1="0"
            y2="17"
            x2="25"
            strokeWidth="3"
            stroke="#43aa8b"
          />
          <Line
            y1="24"
            x1="0"
            y2="24"
            x2="20"
            strokeWidth="3"
            stroke="#43aa8b"
          />
        </Svg>
        <Svg width="50" height="50" viewBox="0 0 50 50">
          <Polyline
            points="3 3, 25 18, 3 33"
            stroke="#43aa8b"
            strokeWidth="3"
          />
        </Svg>
      </View>
    </Container>
  );
};

export default Shapes;

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
    padding: 50,
    backgroundColor: 'white',
  },
});
