import React, {FC} from 'react';
import {mobileDoughnutChartConfig} from '@health-box/common';
import {ItemTitle} from './ItemTitle';
import {View} from 'react-native';
import {ProgressChart} from 'react-native-chart-kit';

interface DoughnutChartProps {
  title: string;
  data: number;
}

export const DoughnutChart: FC<DoughnutChartProps> = ({title, data}) => {
  return (
    <View>
      <ItemTitle title={title} />
      <View>
        <ProgressChart {...mobileDoughnutChartConfig(data)} />
      </View>
    </View>
  );
};
