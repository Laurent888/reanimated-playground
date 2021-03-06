import {StackNavigationProp} from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import RowButton from '../components/RowButton';
import {MainStackProps} from '../navigation/AppNavigator';
interface ChoicesProps {
  navigation: StackNavigationProp<MainStackProps, 'Choices'>;
}

const Choices: React.FC<ChoicesProps> = ({navigation}) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <RowButton
        label="DragNDrop"
        onPress={() => navigation.navigate('dragNDrop')}
      />
      <RowButton label="Slider" onPress={() => navigation.navigate('Slider')} />
      <RowButton
        label="Pie Chart"
        onPress={() => navigation.navigate('PieChart')}
      />
      <RowButton
        label="Bar Graph"
        onPress={() => navigation.navigate('BarGraph')}
      />
      <RowButton label="Svg" onPress={() => navigation.navigate('Svg')} />
      <RowButton
        label="AwwSlider"
        onPress={() => navigation.navigate('AwwSlider')}
      />
      <RowButton
        label="Practice"
        onPress={() => navigation.navigate('Practice')}
      />
      <RowButton
        label="PullIos"
        onPress={() => navigation.navigate('Pullios')}
      />
      <RowButton
        label="Carousel"
        onPress={() => navigation.navigate('Carousel')}
      />
      <RowButton
        label="ShowList"
        onPress={() => navigation.navigate('ShowList')}
      />
      <RowButton label="Camera" onPress={() => navigation.navigate('Camera')} />
      <RowButton
        label="Flatlist"
        onPress={() => navigation.navigate('flatlist')}
      />
    </ScrollView>
  );
};

export default Choices;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
  },
  contentContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
