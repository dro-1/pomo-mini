import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity {...props} style={[styles(size).container, style]}>
      <Text style={[styles(size).title, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    container: {
      borderWidth: 2,
      borderRadius: size / 2,
      borderColor: '#fff',
      height: size,
      width: size,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: size / 2,
      color: '#fff',
    },
  });

export default RoundedButton;
