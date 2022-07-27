import {View, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {numbers, operations} from '../../constants';
import AppButton from '../atoms/AppButton';
import colors from '../../constants/colors';
import {convertExpFromArabicToRoman} from '../../utils/convertArabicToRoman';
import {convertExpFromRomanToArabic} from '../../utils/convertRomanToArabic';

export interface AppOnScreenKeyboardProps {
  operation: (e: any) => void;
  isRoman: boolean;
}

const AppOnScreenKeyboard = (props: AppOnScreenKeyboardProps) => {
  const operatorSelected = (operation: string) => {
    props.operation(operation);
  };

  const renderLabel = (char: string): any => {
    if (char === ',' || char === '=' || char === '0') {
      return char;
    }
    return props.isRoman
      ? convertExpFromArabicToRoman(char)
      : convertExpFromRomanToArabic(char);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.numbers}>
        {numbers.map((row, i) => (
          <View key={i} style={styles.row}>
            {row.map(char => (
              <AppButton
                key={char}
                label={renderLabel(char)}
                operation={operatorSelected}
              />
            ))}
          </View>
        ))}
      </SafeAreaView>
      <SafeAreaView style={styles.operations}>
        {operations.map(char => (
          <AppButton key={char} label={char} operation={operatorSelected} />
        ))}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'row',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
  },
  operations: {
    flex: 1,
    backgroundColor: colors.operator,
  },
});

export default AppOnScreenKeyboard;
