import React, {memo, useState} from 'react';
import {StyleSheet, FlatList, View, Text, Button} from 'react-native';

const DATA = [
  {
    id: 1,
    name: 'France',
  },
  {
    id: 2,
    name: 'Spain',
  },
  {
    id: 3,
    name: 'Russia',
  },
];

interface ItemProps {
  item: {
    id: number;
    name: string;
  };
}

const Item: React.FC<ItemProps> = memo(({item}) => {
  console.log(item.name);
  return (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  );
});

const FlatlistScreen = () => {
  const [state, setState] = useState(0);
  return (
    <View style={styles.container}>
      <Button title="Add" onPress={() => setState((prev) => prev + 1)} />
      <FlatList
        data={DATA}
        ListHeaderComponent={() => {
          return <Text style={styles.counter}>{state}</Text>;
        }}
        renderItem={({item}) => <Item item={item} />}
      />
    </View>
  );
};

export default FlatlistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginBottom: 2,
  },
  counter: {
    fontSize: 20,
    fontWeight: '700',
    padding: 5,
    textAlign: 'center',
  },
});
