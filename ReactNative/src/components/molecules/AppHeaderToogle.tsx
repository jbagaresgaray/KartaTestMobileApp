import {View, Text, StyleSheet, Switch, SafeAreaView} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import colors from '../../constants/colors';

export interface AppHeaderToogleProps {
  isRoman: boolean;
  toggleSwitch: Dispatch<SetStateAction<boolean>>;
}

const AppHeaderToogle = (props: AppHeaderToogleProps) => {
  return (
    <SafeAreaView style={styles.Header}>
      <Switch
        style={styles.Switch}
        trackColor={{false: colors.operator, true: colors.white}}
        thumbColor={props.isRoman ? colors.operator : colors.white}
        ios_backgroundColor="#3e3e3e"
        onValueChange={props.toggleSwitch}
        value={props.isRoman}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Header: {
    backgroundColor: colors.dark,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  Switch: {
    marginRight: 22,
    marginTop: 10,
  },
});

export default AppHeaderToogle;
