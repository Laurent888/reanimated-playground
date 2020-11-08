import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface RowButtonProps {
  label: string;
  onPress: () => void;
}

const RowButton: React.FC<RowButtonProps> = ({label, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.container}
      onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default RowButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '600',
    color: '#b56576',
  },
});
