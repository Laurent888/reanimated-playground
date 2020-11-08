import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppNavigator from './src/navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';

const PERSISTENCE_KEY = 'NAVIGATION_STATE';

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();

  useEffect(() => {
    const restoreState = async () => {
      try {
        const res = await AsyncStorage.getItem(PERSISTENCE_KEY);

        const state = res ? JSON.parse(res) : undefined;

        if (state !== undefined) {
          setInitialState(state);
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  console.log(isReady);

  if (!isReady) return null;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer
        initialState={initialState}
        onStateChange={(state) =>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
