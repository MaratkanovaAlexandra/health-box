import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {
  ItemTitleChartTitle,
  ItemTitleTitleText,
  ItemTitleTodayText,
  colors,
} from '@health-box/common';

interface ItemTitleProps {
  title: string;
  today?: string;
}

export const ItemTitle: FC<ItemTitleProps> = ({title, today}) => {
  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.today}>{today}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: ItemTitleChartTitle(colors.light_gray, true),
  titleText: ItemTitleTitleText(true),
  today: ItemTitleTodayText(colors.purple, true),
});
