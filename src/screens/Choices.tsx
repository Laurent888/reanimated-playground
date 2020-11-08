import {StackNavigationProp} from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import RowButton from '../components/RowButton';
import {MainStackProps} from '../navigation/AppNavigator';

interface ChoicesProps {
  navigation: StackNavigationProp<MainStackProps, 'Choices'>;
}

const Choices: React.FC<ChoicesProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <RowButton
        label="DragNDrop"
        onPress={() => navigation.navigate('dragNDrop')}
      />
      <RowButton label="Slider" onPress={() => navigation.navigate('Slider')} />
    </View>
  );
};

export default Choices;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
