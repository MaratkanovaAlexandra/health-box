import '@formatjs/intl-getcanonicallocales/polyfill';
import '@formatjs/intl-locale/polyfill';
import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-pluralrules/locale-data/ru';
import '@formatjs/intl-pluralrules';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';

import {RootNavigation} from './src';
import {StyleSheet} from 'react-native';

function App(): JSX.Element {
  const navigationRef = useNavigationContainerRef();
  const [navigationReady, setNavigationReady] = useState(false);

  const isAppReady = useCallback(() => {
    if (navigationReady) {
      // SplashScreen.hide();
    }
  }, [navigationReady]);

  useEffect(() => {
    isAppReady();
  }, [isAppReady]);

  return (
    <GestureHandlerRootView style={styles.f1}>
      <SafeAreaProvider>
        <PaperProvider>
          <NavigationContainer
            ref={navigationRef}
            onReady={() => setNavigationReady(true)}>
            <RootNavigation />
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;

const styles = StyleSheet.create({
  f1: {
    flex: 1,
  },
});
