import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Image from '../components/Image';

export const Small = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{width: 200, height: 200}}>
        <Image
          source={{
            uri:
              'https://images.unsplash.com/photo-1606822350112-b9e3caea2461?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
          }}
          style={[StyleSheet.absoluteFillObject]}
        />
      </View>
    </View>
  );
};

export const Large = () => {
  return (
    <View style={{flex: 1}}>
      <Image
        style={StyleSheet.absoluteFillObject}
        source={{
          uri:
            'https://images.unsplash.com/photo-1606822350112-b9e3caea2461?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        }}
      />
    </View>
  );
};
