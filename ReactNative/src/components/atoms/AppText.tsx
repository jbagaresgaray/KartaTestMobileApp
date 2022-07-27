import {StyleSheet, Text, TextProps} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';

const AppText = (props: TextProps) => {
  return (
    <Text style={styles.text} {...props}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: 30,
  },
});

export default AppText;
