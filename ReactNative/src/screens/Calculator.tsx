import {useColorScheme, StyleSheet, StatusBar, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import AppDisplay from '../components/molecules/AppDisplay';
import AppOnScreenKeyboard from '../components/molecules/AppOnScreenKeyboard';
import AppHeaderToogle from '../components/molecules/AppHeaderToogle';
import colors from '../constants/colors';
import {convertExpFromRomanToArabic} from '../utils/convertRomanToArabic';
import {convertExpFromArabicToRoman} from '../utils/convertArabicToRoman';

const Calculator = () => {
  const [result, setResult] = useState('');
  const [display, setDisplay] = useState('');
  const [isRoman, setIsRoman] = useState(false);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.darker : colors.white,
  };

  useEffect(() => {
    const _display: any = isRoman
      ? convertExpFromArabicToRoman(display)
      : convertExpFromRomanToArabic(display);

    const _result: any = isRoman
      ? convertExpFromArabicToRoman(result)
      : convertExpFromRomanToArabic(result);

    setResult(_result);
    setDisplay(_display);
  }, [isRoman]);

  const handleOperation = (operation: string) => {
    if (operation === 'C') {
      setResult('');
      setDisplay('');
    } else if (operation === '=') {
      let fixedOperation = display.split('×').join('*');
      fixedOperation = fixedOperation.split('÷').join('/');
      fixedOperation = fixedOperation.split(',').join('.');

      const _result = new String(eval(fixedOperation)).toString();
      setResult(_result);
      if (_result !== 'undefined') {
        setDisplay(display);
      }
    } else {
      const _display = display + operation;
      const _result = result;
      setResult(_result);
      setDisplay(_display);
    }
  };

  return (
    <View style={{...backgroundStyle, ...styles.container}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppHeaderToogle isRoman={isRoman} toggleSwitch={setIsRoman} />
      <AppDisplay
        state={{
          display,
          result,
        }}
      />
      <AppOnScreenKeyboard isRoman={isRoman} operation={handleOperation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: colors.darker,
  },
});

export default Calculator;
