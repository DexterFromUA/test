import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
  },
  header: {
    alignSelf: 'center',
    paddingVertical: 40,
  },
  headerText: {
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonSwap: {
    paddingTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 40,
  },
  inputEquals: {
    alignSelf: 'center',
  },
});
