import { colors } from '..'
import { daysOfWeek } from '../utils/daysOfWeek'

export const formatDataForLineChart = (data: number[], label: string) => ({
  labels: daysOfWeek,
  datasets: [
    {
      label,
      data: data.map((item, index) => ({ x: index, y: item })),
      borderColor: colors.purple,
      backgroundColor: colors.purple,
    },
  ],
})
