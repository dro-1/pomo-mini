import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import RoundedButton from '../../components/RoundedButton';

const Timing = ({ addTime }) => (
  <React.Fragment>
    <RoundedButton
      title="+1"
      onPress={() => addTime(1, true)}
      size={80}
      style={{ marginRight: 20 , marginBottom: 40 }}
      textStyle={{ fontSize: 30 }}
    />
    <RoundedButton
      title="+5"
      onPress={() => addTime(5, true)}
      size={80}
      style={{ marginRight: 20 , marginBottom: 40 }}
      textStyle={{ fontSize: 30 }}
    />
    <RoundedButton
      title="+10"
      onPress={() => addTime(10, true)}
      size={80}
      style={{ marginRight: 10 }}
      textStyle={{ fontSize: 30 }}
    />
    <RoundedButton
      title="-1"
      onPress={() => addTime(1)}
      size={80}
      style={{ marginRight: 10 }}
      textStyle={{ fontSize: 30 }}
    />
    <RoundedButton
      title="-5"
      onPress={() => addTime(5)}
      size={80}
      style={{ marginRight: 10 }}
      textStyle={{ fontSize: 30 }}
    />
    <RoundedButton
      title="-10"
      onPress={() => addTime(10)}
      size={80}
      style={{ marginRight: 10 }}
      textStyle={{ fontSize: 30 }}
    />
  </React.Fragment>
);

const styles = StyleSheet.create({});

export default Timing;
