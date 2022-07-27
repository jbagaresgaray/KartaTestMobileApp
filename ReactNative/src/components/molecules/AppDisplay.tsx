import {View, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import AppText from '../atoms/AppText';
import colors from '../../constants/colors';

export interface AppDisplayProps {
  state: {
    display: string;
    result: string;
  };
}

const AppDisplay = (props: AppDisplayProps) => {
  const {state} = props;

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safe}>
        <AppText style={styles.display} adjustsFontSizeToFit numberOfLines={1}>
          {state.display}
        </AppText>
        {state.result !== '' && (
          <AppText style={styles.result} adjustsFontSizeToFit numberOfLines={1}>
            {state.result}
          </AppText>
        )}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 24,
  },
  safe: {
    flex: 1,
    justifyContent: 'space-around',
  },
  display: {
    textAlign: 'right',
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 40,
  },
  result: {
    textAlign: 'right',
    color: colors.white,
    fontSize: 30,
  },
});

export default AppDisplay;
