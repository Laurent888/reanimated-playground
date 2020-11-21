import React from 'react';
import {StyleSheet, Image as NativeImage, ImageProps} from 'react-native';

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});

interface Props extends ImageProps {}

const Image: React.FC<Props> = (props) => {
  return <NativeImage {...props} style={styles.image} />;
};

export default Image;
