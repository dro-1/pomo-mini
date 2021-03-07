import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import RoundedButton from '../../components/RoundedButton'

const Focus = ({ addSubject }) => {
  const [tempSubject, setTempSubject] = useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}> What would you like to focus on ?</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} onChangeText={text=>setTempSubject(text)} />
        <RoundedButton title='+' size={60} onPress={()=>addSubject(tempSubject)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    marginHorizontal: 20,
    marginBottom: 50
  },
  text: {
    color: '#fff',
    fontSize: 25,
  },
  textContainer: {
    marginTop: 150,
  },
  inputContainer:{
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    marginRight: 20
  }

});

export default Focus;
