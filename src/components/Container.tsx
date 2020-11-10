import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Alignment = 'center' | 'flex-start';

interface Props {
  children: React.ReactNode;
  justify?: Alignment;
  align?: Alignment;
}

const Container: React.FC<Props> = ({
  children,
  justify = 'flex-start',
  align = 'flex-start',
}) => {
  return (
    <View
      style={[styles.container, {justifyContent: justify, alignItems: align}]}>
      {children}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
  },
});
