import React, {useRef, useState} from 'react';
import {Button, Dimensions, TextInput, View} from 'react-native';

import CircleComponent from '../components/Circle';
import Container from '../components/Container';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const Practice = () => {
  const [state, setState] = useState('');
  const [progress, setProgress] = useState(0);
  const inputRef = useRef();

  console.log('Render app');
  return (
    <Container align="center" justify="center">
      <View style={{width: 200, height: 200, backgroundColor: 'green'}}>
        <CircleComponent value={progress} />
      </View>
      <TextInput
        value={state}
        onChangeText={(t) => setState(t)}
        keyboardType="number-pad"
        style={{
          width: 100,
          paddingVertical: 5,
          borderWidth: 1,
          borderColor: 'green',
        }}
      />
      <Button
        title="Set animation"
        onPress={() => {
          console.log(progress);

          setProgress(Number(state));
        }}
      />
    </Container>
  );
};

export default Practice;
