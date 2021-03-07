import React, { useState, useEffect } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Focus from './src/features/focus/Focus';
import FocusHistory from './src/features/focus/FocusHistory';
import Timer from './src/features/timer/Timer';

export default function App() {
  const [focusObject, setFocusObject] = useState();
  const [focusHistory, setFocusHistory] = useState([]);
  const onClear = () => setFocusHistory([]);

  const loadFocusHistory = async () => {
    try {
      const history = await AsyncStorage.getItem('focusHistory');
      console.log('load history', history);
      if (history && JSON.parse(history).length)
        setFocusHistory(JSON.parse(history));
    } catch (e) {
      console.log('error',e);
    }
  };

  const saveFocusHistory = async () => {
    try {
      await AsyncStorage.setItem('focusHistory', JSON.stringify(focusHistory));
    } catch (e) {
      console.log('error',e);
    }
  };

  
  useEffect(() => {
    loadFocusHistory();
  }, []);

  useEffect(() => {
    console.log('save', focusHistory);
    saveFocusHistory();
  }, [focusHistory]);


  return (
    <ScrollView style={styles.container}>
      {focusObject ? (
        <Timer
          focusObject={focusObject}
          onTimerEnd={() => {
            setFocusHistory([
              ...focusHistory,
              { subject: focusObject, completed: true, key: String(focusHistory.length+1) },
            ]);
            setFocusObject(null);
          }}
          clearFocusObject={() => {
            setFocusHistory([
              ...focusHistory,
              { subject: focusObject, completed: false, key: String(focusHistory.length+1) },
            ]);
            setFocusObject(null);
          }}
        />
      ) : (
        <React.Fragment>
          <Focus addSubject={setFocusObject} />
          <FocusHistory onClear={onClear} focusHistory={focusHistory} />
        </React.Fragment>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252250',
    marginTop: 32,
  },
});
