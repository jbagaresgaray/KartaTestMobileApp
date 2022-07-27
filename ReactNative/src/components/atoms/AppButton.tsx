import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';
import React from 'react';
import AppText from './AppText';

export interface AppButtonProps extends TouchableOpacityProps {
  label: string;
  operation: (e: any) => void;
}

const AppButton = (props: AppButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.operation(props.label)}>
      <AppText>{props.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppButton;
