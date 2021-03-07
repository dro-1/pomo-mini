import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const minutesToMillis = (mins) => mins * 60 * 1000;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

const Countdown = ({ minutes = 5, isPaused, onProgress, onEnd }) => {
  const interval = useRef(null);

  const [millis, setMillis] = useState(minutesToMillis(minutes));
  const mins = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  const countdown = () => {
    setMillis((prevTime) => {
      if (prevTime === 0) {
        clearInterval(interval.current);
        return prevTime;
      } else {
        const timeLeft = prevTime - 1000;

        return timeLeft;
      }
    });
  };

  useEffect(() => {
    onProgress(millis / minutesToMillis(minutes));
    if (millis === 0) onEnd();
  }, [millis]);

  useEffect(() => setMillis(minutesToMillis(minutes)), [minutes]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countdown, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {formatTime(mins)}:{formatTime(seconds)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: 'rgba(94,132,226,0.3)',
    padding: 20,
  },
  text: {
    color: '#fff',
    fontSize: 80,
    textAlign: 'center',
  },
});

export default Countdown;
