import React from 'react';
import {View, FlatList, Pressable, Text, StyleSheet} from 'react-native';

export default ({currencies, setCurrency}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={currencies}
        renderItem={({item}) => {
          return (
            <Pressable onPress={() => setCurrency(item)} style={styles.item}>
              <Text>{`${item.cc} (${item.txt})`}</Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 10,
    right: 10,
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  item: {
    height: 40,
    justifyContent: 'center',
    borderBottomWidth: 1,
    paddingLeft: 10,
  },
});
