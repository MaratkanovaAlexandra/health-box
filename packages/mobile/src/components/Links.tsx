import React from 'react';
import {ItemTitle} from '../components';
import {colors} from '@health-box/common';
import {List} from 'react-native-paper';
import {AndroidIcon, AppleIcon, DesktopIcon, WebIcon} from '../icons';
import {StyleSheet, TouchableOpacity} from 'react-native';

const platforms = [WebIcon, DesktopIcon, AndroidIcon, AppleIcon];

export const Links = () => {
  return (
    <>
      <ItemTitle title="Наше приложение для других патформ" />
      <List.Section style={styles.list}>
        {platforms.map(Platform => (
          <TouchableOpacity style={styles.button}>
            <Platform height={32} width={32} />
          </TouchableOpacity>
        ))}
      </List.Section>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },

  button: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `${colors.purple}33`,
    borderRadius: 100,
  },
});
