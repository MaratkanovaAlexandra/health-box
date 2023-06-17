import React from 'react';
import {Text, Card} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DayGoals, Layout, LineChart, Links} from '../components';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from '@health-box/common';

export const MainScreen = () => {
  return (
    <Layout>
      <SafeAreaView style={styles.body} edges={['bottom', 'left', 'right']}>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <Text variant="displaySmall">Статистика</Text>

          <Card mode="contained" style={styles.item}>
            <Card.Content>
              <LineChart
                title="Калории за неделю"
                today="1200 ккал"
                data={[1100, 1770, 1340, 1230, 2100, 1980, 2200]}
              />
            </Card.Content>
          </Card>

          <Card mode="contained" style={styles.goals}>
            <DayGoals />
          </Card>

          <Card mode="contained" style={styles.item}>
            <Card.Content>
              <Links />
            </Card.Content>
          </Card>
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

  item: {
    backgroundColor: colors.white,
    marginTop: 24,
  },

  goals: {
    marginTop: 24,
    backgroundColor: 'transparent',
  },

  scroll: {
    flex: 1,
  },
});
