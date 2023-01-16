/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View, Pressable, Text} from 'react-native';

import {Modal, Button, Input} from './components';
import {URL, CURRENCY_TYPE} from './constants';
import {useFetch} from './hooks/useFetch';
import {converter} from './utils';

import styles from './styles';

const App = () => {
  const {data} = useFetch(URL, {
    cc: 'UAH',
    exchangedate: '05.01.2023',
    r030: 0,
    rate: 0,
    txt: 'Гривня',
  });

  const [isVisible, setIsVisible] = React.useState(null);
  const [currencyOf, setCurrencyOf] = React.useState(null);
  const [currencyIn, setCurrencyIn] = React.useState(null);
  const [inputOf, setInputOf] = React.useState(0);
  const [inputIn, setInputIn] = React.useState(0);
  const [lastChanged, setLastChanged] = React.useState(null);

  React.useEffect(() => {
    convertCurrency();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputOf, inputIn, currencyOf?.cc, currencyIn?.cc]);

  const setCurrency = curr => {
    if (isVisible && isVisible === CURRENCY_TYPE[0]) {
      setCurrencyOf({...curr});
    } else if (isVisible && isVisible === CURRENCY_TYPE[1]) {
      setCurrencyIn({...curr});
    }

    setIsVisible(null);
  };

  const onInputChange = (value, type) => {
    setLastChanged(type);

    if (type === CURRENCY_TYPE[0]) {
      setInputOf(value);
    } else if (type === CURRENCY_TYPE[1]) {
      setInputIn(value);
    }
  };

  const convertCurrency = () => {
    const [last, result] = converter({
      currencyOf,
      currencyIn,
      inputOf,
      inputIn,
      lastChanged,
    });

    last === CURRENCY_TYPE[0] ? setInputIn(result) : setInputOf(result);
  };

  const handleSwapCurrency = () => {
    const cOf = currencyOf;
    const cIn = currencyIn;
    const iOf = inputOf;
    const iIn = inputIn;

    setCurrencyOf({...cIn});
    setCurrencyIn({...cOf});
    setInputOf(iIn);
    setInputIn(iOf);

    convertCurrency();
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Currencies</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => setIsVisible(CURRENCY_TYPE[0])}
            title={currencyOf ? currencyOf.cc : 'Empty'}
          />

          <Pressable onPress={handleSwapCurrency}>
            <View style={styles.buttonSwap}>
              <Text>{'>'}</Text>
              <Text>{'<'}</Text>
            </View>
          </Pressable>

          <Button
            onPress={() => setIsVisible(CURRENCY_TYPE[1])}
            title={currencyIn ? currencyIn.cc : 'Empty'}
          />
        </View>

        <View style={styles.inputContainer}>
          <Input
            value={inputOf}
            editable={!!currencyOf && !!currencyIn}
            onChange={text => onInputChange(text, CURRENCY_TYPE[0])}
          />

          <View style={styles.inputEquals}>
            <Text>===</Text>
          </View>

          <Input
            value={inputIn}
            editable={!!currencyOf && !!currencyIn}
            onChange={text => onInputChange(text, CURRENCY_TYPE[1])}
          />
        </View>

        {isVisible && <Modal currencies={data} setCurrency={setCurrency} />}
      </View>
    </SafeAreaView>
  );
};

export default App;
