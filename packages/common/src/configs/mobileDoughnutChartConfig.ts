export const mobileDoughnutChartConfig = (data: number, width = 350) => ({
  data: [data/100],
  width,
  height: 220,
  strokeWidth: 30,
  radius: 80,
  chartConfig: {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(113, 102, 249, ${opacity})`,
    barPercentage: 0.5,
  },
  hideLegend: true
})