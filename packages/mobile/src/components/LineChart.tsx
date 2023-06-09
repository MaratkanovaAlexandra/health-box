import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {ItemTitle} from '.';
import {LineChart as LineChartUI} from 'react-native-chart-kit';
import {mobileLineChartConfig} from '@health-box/common';

interface LineChartProps {
  title: string;
  today: string;
  data: number[];
}

export const LineChart: FC<LineChartProps> = ({title, today, data}) => {
  return (
    <View>
      <ItemTitle title={title} today={today} />
      <View style={styles.chartWrapper}>
        <LineChartUI {...mobileLineChartConfig(data, 390)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chartWrapper: {
    marginTop: 30,
  },
});
