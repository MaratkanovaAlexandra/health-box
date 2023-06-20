import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AddRecord, DoughnutChart, Layout, LineChart} from '../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '@health-box/common';
import {ScrollView} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';

export const OptionScreen = () => {
  return (
    <Layout>
      <SafeAreaView style={styles.body} edges={['bottom', 'left', 'right']}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text variant="displaySmall">Калории</Text>
          <View style={styles.wrapper}>
            <DoughnutChart title="Калории за день" data={70} />
          </View>
          <View style={styles.wrapper}>
            <AddRecord type={'calories'} />
          </View>
          <View style={styles.wrapper}>
            <LineChart
              title="Калории за неделю"
              today="1200 ккал"
              data={[1960, 2134, 2200, 1765, 2100, 1888, 2000]}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 16,
    flex: 1,
  },

  wrapper: {
    borderRadius: 32,
    backgroundColor: colors.white,
    padding: 16,
    marginTop: 24,
  },
});
