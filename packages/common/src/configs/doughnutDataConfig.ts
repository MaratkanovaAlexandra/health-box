import { colors } from '..'

export const doughnutDataConfig = (percent: number) => ({
  labels: [''],
  datasets: [
    {
      label: '',
      data: [percent, 100 - percent],
      backgroundColor: [colors.purple, 'transparent'],
      borderColor: ['transparent', 'transparent'],
    },
  ],
})
