import React, {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Nav} from '.';

export const Layout = ({children}: PropsWithChildren) => {
  return (
    <View style={styles.body}>
      {/* <Nav /> */}
      <Header />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    position: 'relative',
    flex: 1,
  },
});
