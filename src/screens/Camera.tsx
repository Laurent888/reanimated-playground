import React, {useState} from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Image from '../components/Image';

const IMAGE_HEIGHT = 1000;

const options = {
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
  maxHeight: IMAGE_HEIGHT,
  maxWidth: IMAGE_HEIGHT / 1.5,
  quality: 0.7,
  includeBase64: false,
};

const Camera = () => {
  const [image, setImage] = useState();

  const onPress = () => {
    // ImagePicker.showImagePicker(options, (res) => {
    //   if (res.didCancel) {
    //     return;
    //   }

    //   console.log(res.width, res.fileSize, res.fileSize / 1024 / 1024);
    //   console.log(Object.keys(res), res.data.slice(0, 100));

    //   setImage(res.uri);
    // });

    ImagePicker.launchImageLibrary(options, (res) => {
      console.log(Object.keys(res));
      setImage(res.uri);
    });
  };

  return (
    <View style={styles.container}>
      <Text>Camera</Text>
      <View style={styles.button}>
        <Button title="Camera" onPress={onPress} color="#333" />
      </View>
      <View style={styles.imageContainer}>
        {image && <Image source={{uri: image}} />}
      </View>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'lightblue',
    marginBottom: 20,
  },
  imageContainer: {
    width: 370,
    height: 650,
    backgroundColor: '#eee',
  },
});
