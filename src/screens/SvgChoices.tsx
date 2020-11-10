import React from 'react';

import Container from '../components/Container';
import RowButton from '../components/RowButton';

const SvgChoices = ({navigation}) => {
  return (
    <Container>
      <RowButton
        label="Rotating Circles"
        onPress={() => navigation.navigate('rotatingCircles')}
      />
      <RowButton
        label="Some shapes"
        onPress={() => navigation.navigate('svgShapes')}
      />
    </Container>
  );
};

export default SvgChoices;
