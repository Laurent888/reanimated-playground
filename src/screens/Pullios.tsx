import React from 'react';
import faker from 'faker';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  interpolate,
} from 'react-native-reanimated';
import {FlatList} from 'react-native-gesture-handler';

const OBJ = () => ({
  id: faker.random.uuid(),
  city: faker.address.city(),
});

const DATA = new Array(5).fill(0).map((item) => OBJ());

const Pullios = () => {
  const scrollY = useSharedValue(0);

  const titleScrollY = useDerivedValue(() => {
    return Math.abs(Math.min(scrollY.value, 0) / 3);
  });

  const titleScale = useDerivedValue(() => {
    return 1 + Math.abs(scrollY.value / 400);
  });

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollY.value = e.nativeEvent.contentOffset.y;
  };

  const interpolation = interpolate(titleScale.value, [1, 1.5], [0, 1200]);

  const animatedHeader = useAnimatedStyle(() => ({
    transform: [
      {translateY: titleScrollY.value},
      {translateX: 100},
      {scale: titleScale.value},
    ],
  }));

  return (
    <View>
      <Animated.View style={[styles.header, animatedHeader]}>
        <Text style={styles.title}>LIST</Text>
      </Animated.View>
      <FlatList
        data={DATA}
        onScroll={onScroll}
        scrollEventThrottle={16}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <Text>{item.city}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Pullios;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingBottom: 15,
    paddingTop: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: '700',
    color: 'darkblue',
  },
  listItem: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
  },
});
