import React from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';

export default ({onPress, title}) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 150,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
