import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Drawer} from 'react-native-paper';

export const Nav = () => {
  const [active, setActive] = useState('');

  return (
    <Drawer.Section title="Some title" style={styles.nav}>
      <Drawer.Item
        label="First Item"
        active={active === 'first'}
        onPress={() => setActive('first')}
      />
      <Drawer.Item
        label="Second Item"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
    </Drawer.Section>
  );
};

const styles = StyleSheet.create({
  nav: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
