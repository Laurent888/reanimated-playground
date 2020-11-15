import React, {useState} from 'react';
import {LayoutChangeEvent, StyleSheet, View} from 'react-native';
import {PanGestureHandler, TextInput} from 'react-native-gesture-handler';
import throttle from 'lodash.throttle';
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  runOnJS,
  useDerivedValue,
  useAnimatedProps,
} from 'react-native-reanimated';
import AnimatedText from '../components/AnimatedText';
import Container from '../components/Container';

const SLIDER_HEIGHT = 10;
const KNOB_RADIUS = 15;
const DEFAULT_ACTIVE_COLOR = 'green';

const clamp = (value: number, lowerBound: number, upperBound: number) => {
  'worklet';
  return Math.min(upperBound, Math.max(lowerBound, value));
};

interface MySliderProps {
  /**
   * Set the trackColor
   */
  trackColor?: string;
  /**
   * Set the progress track color
   */
  progressColor?: string;
  /**
   * Set the knob color
   */
  knobColor?: string;
  /**
   * Set the track height
   */
  trackHeight?: number;
  /**
   * By default 0
   */
  minValue?: number;
  maxValue: number;
  onChange?: (val: number | string) => void;
  onComplete?: (val: number | string) => void;
  value?: number;
}

const MySlider: React.FC<MySliderProps> = ({
  trackColor = '#ccc',
  knobColor = DEFAULT_ACTIVE_COLOR,
  trackHeight = SLIDER_HEIGHT,
  progressColor = DEFAULT_ACTIVE_COLOR,
  minValue = 0,
  maxValue = 100,
  onComplete,
  onChange,
  value,
}) => {
  const [trackWidth, setTrackWidth] = useState<number | undefined>(undefined);

  const translationX = useSharedValue(0);

  const _onChange = () => {
    onChange(Number(calculatedValue.value));
  };

  const _onComplete = () => {
    if (onComplete) {
      onComplete(Number(calculatedValue.value));
    }
  };

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.offsetX = translationX.value;
    },
    onActive: (e, ctx) => {
      translationX.value = clamp(e.translationX + ctx.offsetX, 0, trackWidth);
      runOnJS(_onChange)();
    },
    onEnd: (_, ctx) => {
      runOnJS(_onComplete)();
    },
  });

  const knobAnimated = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translationX.value}],
    };
  });

  const progressAnimated = useAnimatedStyle(() => {
    return {
      width: translationX.value,
    };
  });

  const measureView = (e: LayoutChangeEvent) => {
    const {
      nativeEvent: {
        layout: {width},
      },
    } = e;

    const newWidth = width;

    setTrackWidth(newWidth);
  };

  const calculatedValue = useDerivedValue(() => {
    if (!trackWidth) return;

    const step = trackWidth / maxValue;
    const resValue = Math.ceil(translationX.value / step);
    return String(resValue);
  });

  return (
    <View style={styles.content}>
      <View
        onLayout={(e) => measureView(e)}
        style={[
          styles.track,
          {backgroundColor: trackColor, height: trackHeight},
        ]}>
        <Animated.View
          style={[
            styles.progress,
            {backgroundColor: progressColor},
            progressAnimated,
          ]}
          pointerEvents="none"
        />
        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <Animated.View style={[styles.knobContainer, knobAnimated]}>
            <View style={[styles.knob, {backgroundColor: knobColor}]} />
          </Animated.View>
        </PanGestureHandler>
      </View>
      <View>
        <AnimatedText text={calculatedValue} />
      </View>
    </View>
  );
};

export default MySlider;

const styles = StyleSheet.create({
  track: {
    width: '100%',
    height: SLIDER_HEIGHT,
    backgroundColor: '#ccc',
    borderRadius: SLIDER_HEIGHT / 2,
    position: 'relative',
  },
  knobContainer: {
    width: KNOB_RADIUS * 2,
    height: KNOB_RADIUS * 2,
    borderRadius: KNOB_RADIUS,
    padding: 2,
    position: 'absolute',
    backgroundColor: '#eee',
    top: -KNOB_RADIUS + SLIDER_HEIGHT / 2,
    left: -KNOB_RADIUS,
  },
  knob: {
    width: '100%',
    height: '100%',
    borderRadius: KNOB_RADIUS,
    backgroundColor: 'green',
  },
  progress: {
    height: SLIDER_HEIGHT,
    width: 50,
    position: 'absolute',
    left: 0,
    backgroundColor: 'green',
    borderRadius: SLIDER_HEIGHT / 2,
  },
  content: {
    paddingHorizontal: 50,
    width: '100%',
  },
});
