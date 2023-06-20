import React from 'react';
import {Appbar, Avatar} from 'react-native-paper';
import {MenuIcon} from '../icons';
import {StyleSheet} from 'react-native';
import {colors} from '@health-box/common';
import UserImg from '../assets/user.jpeg';
import {TouchableOpacity} from 'react-native';

export const Header = () => {
  return (
    <Appbar.Header mode="small" style={styles.header}>
      <Appbar.BackAction onPress={() => {}} />
      <Avatar.Image source={UserImg} size={40} style={styles.ava} />
      <Appbar.Content title="First Last" />
      <TouchableOpacity>
        <MenuIcon />
      </TouchableOpacity>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 8,
    backgroundColor: colors.white,
  },

  ava: {
    marginRight: 8,
    backgroundColor: colors.light_gray,
  },
});
