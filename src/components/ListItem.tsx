import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  conatainer: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#555',
  },
});

interface Props {
  title: string;
  bgColor?: string;
}

const ListItem: React.FC<Props> = ({title, bgColor = '#fff'}) => {
  return (
    <View style={[styles.conatainer, {backgroundColor: bgColor}]}>
      <Text>{title}</Text>
    </View>
  );
};

export default ListItem;
