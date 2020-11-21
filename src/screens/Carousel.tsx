import React, {useRef} from 'react';
import {
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  StyleSheet,
  Text,
  Animated,
  View,
} from 'react-native';
import faker from 'faker';

import Image from '../components/Image';
import {FlatList} from 'react-native-gesture-handler';

const {width: WIDTH} = Dimensions.get('window');

const DOT_WIDTH = 10;

const DATA = [
  {
    id: 1,
    image: faker.image.transport(),
    color: '#e63946',
    title: faker.vehicle.manufacturer(),
    text: faker.lorem.paragraph(1),
  },
  {
    id: 2,
    image: faker.image.transport(),
    color: '#e5989b',
    title: faker.vehicle.manufacturer(),
    text: faker.lorem.paragraph(1),
  },
  {
    id: 3,
    image: faker.image.transport(),
    color: '#a8dadc',
    title: faker.vehicle.manufacturer(),
    text: faker.lorem.paragraph(1),
  },
  {
    id: 4,
    image: faker.image.transport(),
    color: '#457b9d',
    title: faker.vehicle.manufacturer(),
    text: faker.lorem.paragraph(1),
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: WIDTH,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  textContainer: {
    paddingVertical: 40,
    paddingHorizontal: 40,
  },
  title: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: '700',
    paddingBottom: 20,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
  dotContainer: {
    position: 'absolute',
    bottom: 70,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: DOT_WIDTH,
    height: DOT_WIDTH,
    borderRadius: DOT_WIDTH / 2,
    marginHorizontal: 10,
    backgroundColor: '#fff',
  },
  square: {
    width: WIDTH * 2,
    height: WIDTH * 2,
    borderRadius: WIDTH / 10,
    backgroundColor: '#fff',
    position: 'absolute',
    top: -WIDTH * 1.5,
    left: -WIDTH / 2,
    shadowColor: '#fff',
    shadowOffset: {height: 5, width: 5},
    shadowRadius: 20,
    shadowOpacity: 0.7,
  },
});

const Dot: React.FC = ({animatedOpacity}) => {
  return (
    <Animated.View
      style={[
        styles.dot,
        {opacity: animatedOpacity, transform: [{scale: animatedOpacity}]},
      ]}
    />
  );
};

const Carousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const _onScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {x: scrollX},
        },
      },
    ],
    {useNativeDriver: false},
  );

  const inputRange = DATA.map((_, idx) => idx * WIDTH);
  const outputRange = DATA.map((item) => item.color);
  const outputRangeRotation = DATA.map((_, idx) => `${(idx + 1) * 90 + 45}deg`);

  const interpolatedColors = scrollX.interpolate({
    inputRange,
    outputRange,
  });

  const animatedSquare = scrollX.interpolate({
    inputRange,
    outputRange: outputRangeRotation,
  });

  return (
    <View style={{flex: 1, position: 'relative'}}>
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: interpolatedColors,
        }}
      />
      <Animated.View
        style={[styles.square, {transform: [{rotate: animatedSquare}]}]}
      />
      <FlatList
        horizontal
        pagingEnabled
        data={DATA}
        scrollEventThrottle={16}
        onScroll={_onScroll}
        renderItem={({item, index}) => {
          const animatedOpacity = scrollX.interpolate({
            inputRange: [
              (index - 1) * WIDTH,
              index * WIDTH,
              (index + 1) * WIDTH,
            ],
            outputRange: [0, 1, 0],
            extrapolate: 'clamp',
          });

          const translateX = scrollX.interpolate({
            inputRange: [
              (index - 1) * WIDTH,
              index * WIDTH,
              (index + 1) * WIDTH,
            ],
            outputRange: [100, 0, 0],
          });

          return (
            <View style={[styles.container]}>
              <View style={{height: 100}} />
              <Animated.View
                style={[styles.imageContainer, {opacity: animatedOpacity}]}>
                <Image source={{uri: item.image}} />
              </Animated.View>

              <Animated.View
                style={[styles.textContainer, {opacity: animatedOpacity}]}>
                <Text style={styles.title}>{item.title}</Text>
                <Animated.Text
                  style={[styles.text, {transform: [{translateX}]}]}>
                  {item.text}
                </Animated.Text>
              </Animated.View>
            </View>
          );
        }}
      />

      <View style={styles.dotContainer}>
        {DATA.map((_, index) => {
          const interpolateDotColor = scrollX.interpolate({
            inputRange: [
              (index - 1) * WIDTH,
              index * WIDTH,
              (index + 1) * WIDTH,
            ],
            outputRange: [0.6, 1, 0.6],
            extrapolate: 'clamp',
          });

          return (
            <Dot key={`dot-${index}`} animatedOpacity={interpolateDotColor} />
          );
        })}
      </View>
    </View>
  );
};

export default Carousel;
