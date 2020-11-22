import React, {useEffect} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withDelay,
  Easing,
  useDerivedValue,
  interpolate,
} from 'react-native-reanimated';
import faker from 'faker';

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  listItemText: {
    fontSize: 18,
    color: '#555',
    fontWeight: '600',
  },
});

interface ListItemProps {
  text: string;
  transY: Animated.SharedValue<number>;
  index: number;
  offset: number;
}

const ITEM = () => ({
  id: faker.random.uuid(),
  text: faker.name.jobTitle(),
});

const OFFSET = 100;
const DATA = new Array(10).fill(0).map(() => ITEM());

const ListItem: React.FC<ListItemProps> = ({text, transY, index, offset}) => {
  const delay = useDerivedValue(() => index * 40);

  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(transY.value, [0, 100], [1, 0]);

    return {
      transform: [
        {
          translateY: withDelay(
            delay.value,
            withTiming(transY.value, {
              duration: 200,
              easing: Easing.out(Easing.ease),
            }),
          ),
        },
      ],
      opacity: withDelay(delay.value, withTiming(opacity, {duration: 200})),
    };
  });

  return (
    <Animated.View style={[styles.listItem, animatedStyle]}>
      <Text style={styles.listItemText}>{text}</Text>
    </Animated.View>
  );
};

const ShowList = () => {
  const translateY = useSharedValue(OFFSET);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={DATA}
        style={{backgroundColor: '#ccc', flex: 1}}
        contentContainerStyle={{paddingHorizontal: 20, paddingTop: 20}}
        renderItem={({item, index}) => {
          return (
            <ListItem
              text={item.text}
              transY={translateY}
              offset={OFFSET}
              index={index}
            />
          );
        }}
      />

      <Button
        title="Start"
        onPress={() => {
          translateY.value = 0;
        }}
      />
    </View>
  );
};

export default ShowList;
