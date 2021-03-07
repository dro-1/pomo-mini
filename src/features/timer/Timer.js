import React, { useState } from 'react';
import { Text, View, StyleSheet, Vibration, Platform } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';

import RoundedButton from '../../components/RoundedButton';
import Countdown from '../../components/Countdown';
import Timing from './Timing';

const Timer = ({ focusObject, onTimerEnd, clearFocusObject }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [time, setTime] = useState(0.1);

  const onProgress = (progress) => setProgress(progress);

  const vibrate = () => {
    if(Platform.OS === 'ios'){
      const vibrationInterval = setInterval(()=>Vibration.vibrate(),1000)
      setTimeout(()=>clearInterval(vibrationInterval),4000)
    }else{
      Vibration.vibrate([100,300,100,400])
    }
  }

  const onEnd = () => {
    vibrate()
    setTime(1)
    setProgress(1);
    setIsStarted(false);
    onTimerEnd()
  }

  const addTime = (timeToBeAdded, addition) => {
    setTime(
      addition
        ? time + timeToBeAdded
        : time - timeToBeAdded > 0
        ? time - timeToBeAdded
        : 0
    );
    setProgress(1);
    setIsStarted(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdownContainer}>
        <Countdown
          minutes={time}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd={onEnd}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>You are focusing on: </Text>
        <Text style={styles.text}>{focusObject}</Text>
      </View>
      <ProgressBar
        progress={progress}
        color={'#5E84E8'}
        style={{ height: 5, marginTop: 20 }}
      />
      <View style={styles.timingContainer}>
        <Timing addTime={addTime} />
      </View>
      <View style={styles.buttonWrapper}>
        <RoundedButton
          textStyle={{ fontSize: 30 }}
          title={isStarted ? 'Pause' : 'Start'}
          onPress={() => setIsStarted((isStarted) => !isStarted)}
        />
      </View>
      <RoundedButton
          style={{marginLeft: 15, marginBottom: 15}}
          textStyle={{ fontSize: 20 }}
          title='Stop'
          size={80}
          onPress={() => clearFocusObject()}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 48,
  },
  countdownContainer: {
    marginTop: 50,
  },
  buttonWrapper: {
    padding: 25,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timingContainer: {
    marginTop: 20,
    padding: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 250,
  },
});

export default Timer;
