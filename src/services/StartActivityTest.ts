import {NativeModules} from 'react-native';

const {StartActivityTest} = NativeModules;

const StartActivity = {
  getAnswer: async () => {
    const res = await StartActivityTest.switchApplication();
    return res;
  },
  backToGoogle: async () => {
    StartActivityTest.backToGoogle();
  },
};

export default StartActivity;
