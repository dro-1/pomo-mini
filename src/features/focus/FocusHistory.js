import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import RoundedButton from './../../components/RoundedButton.js'

const FocusHistory = ({ focusHistory, onClear }) => {
  return (
    <View style={styles.container}>
      {!!focusHistory.length && (
        <>
          <Text style={styles.title}> Things You Focused On</Text>
          <FlatList
            data={focusHistory}
            style={{ flex: 1 }}
            contentContainerStyle={{ flex: 1 }}
            renderItem={({ item: { subject, completed } }) => (
              <Text style={styles.item(completed)}>{subject}</Text>
            )}
          />
          <View style={styles.buttonContainer} >
          <RoundedButton onPress={onClear} title='Clear' size={80} textStyle={{fontSize: 20}} />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: (status) => ({
    color: status ? 'green' : 'red',
    fontSize: 25,
    textAlign: 'center'
  }),
  title: {
    fontSize: 30,
    color: '#fff',
  },
  buttonContainer: {
    marginTop: 50
  }
});

export default FocusHistory;
