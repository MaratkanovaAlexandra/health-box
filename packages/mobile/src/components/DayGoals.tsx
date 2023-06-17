import React, {FC} from 'react';
import {
  DayGoalsIcons,
  DayGoalsIconWrapper,
  DayGoalsInfoText,
  DayGoalsTitle,
  DayGoalsWrapper,
  colors,
  // Firebase,
} from '@health-box/common';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {BedIcon, CancelIcon, CheckIcon, FoodIcon, WaterIcon} from '../icons';
import {Card, Text} from 'react-native-paper';
import bg from '../assets/fulfilled-goal-bg.png';

interface GoalProps {
  title: string;
  Icon: any;
  goal: number;
  done: number;
  scale: string;
  id: string;
}

const Goal: FC<GoalProps> = ({Icon, title, goal, done, scale}) => {
  const isDone = goal <= done;
  return (
    <Card style={styles.item} mode="contained">
      <TouchableOpacity>
        <ImageBackground
          source={isDone ? bg : undefined}
          resizeMode="cover"
          style={styles.bg}>
          <Card.Content style={{padding: 16}}>
            <View style={styles.icons}>
              <Icon
                width={50}
                height={50}
                fill={isDone ? colors.white : colors.purple}
              />
              {isDone ? (
                <View style={styles.iconWrapper}>
                  <CheckIcon />
                </View>
              ) : (
                <CancelIcon />
              )}
            </View>

            <Text
              style={[
                styles.info,
                isDone && styles.done,
              ]}>{`${done} / ${goal} ${scale}`}</Text>

            <Text style={[styles.title, isDone && styles.done]}>{title}</Text>
          </Card.Content>
        </ImageBackground>
      </TouchableOpacity>
    </Card>
  );
};

const data = [
  {
    id: 'calories',
    title: 'Калории',
    Icon: FoodIcon,
    goal: 2200,
    done: 1200,
    scale: 'ккал',
  },
  {
    id: 'water',
    title: 'Стаканов воды',
    Icon: WaterIcon,
    goal: 8,
    done: 9,
    scale: 'стаканов',
  },
  {
    id: 'sleep',
    title: 'Сон',
    Icon: BedIcon,
    goal: 8,
    done: 6,
    scale: 'часов',
  },
  {
    id: 'calories',
    title: 'Спорт',
    Icon: FoodIcon,
    goal: 286,
    done: 100,
    scale: 'ккал',
  },
];

export const DayGoals = () => {
  return (
    <View style={styles.wrapper}>
      <Goal {...data[0]} />
      <Goal {...data[1]} />
      <Goal {...data[2]} />
      <Goal {...data[3]} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  item: DayGoalsWrapper(true),

  bg: {
    height: '100%',
    backgroundColor: colors.white,
  },

  icons: DayGoalsIcons(true),
  iconWrapper: DayGoalsIconWrapper(colors.white, true),

  info: DayGoalsInfoText(true),

  done: {
    color: colors.white,
  },

  title: DayGoalsTitle(true),
});
