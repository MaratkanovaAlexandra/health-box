import { daysOfWeek } from "."
import { colors } from ".."

export const mobileLineChartConfig = (data: number[], width = 390) => ({
  data: {
    labels: daysOfWeek,
    datasets: [
      {
        data: data,
      },
    ],
  },
  width,
  height: 220,
  fromZero: true,
  withShadow: false,
  withHorizontalLines: false,
  segments: 5,
  chartConfig: {
    backgroundColor: colors.white,
    backgroundGradientFrom: colors.white,
    backgroundGradientTo: colors.white,
    color: () => colors.purple,
    labelColor: () => colors.middler_gray,
    propsForDots: {
      stroke: colors.purple,
    },
  },
  formatYLabel: yLabel => yLabel.slice(0, yLabel.length - 3)
})