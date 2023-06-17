import React from 'react';
import {Appbar} from 'react-native-paper';

export const Header = () => {
  return (
    <Appbar.Header>
      {/* <Appbar.BackAction onPress={() => {}} /> */}
      <Appbar.Content title="First Last" />
    </Appbar.Header>
  );
};
