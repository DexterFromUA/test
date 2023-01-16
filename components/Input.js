import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export default ({value, onChange, editable}) => {
  return (
    <TextInput
      style={styles.input}
      keyboardType="numeric"
      defaultValue={value}
      onChangeText={onChange}
      editable={editable}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    width: 100,
    borderWidth: 1,
    paddingHorizontal: 5,
  },
});
