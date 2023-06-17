import 'chart.js/auto'

import { FC } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { ItemTitle } from '@/components'
import {
  doughnutChartConfig,
  doughnutDataConfig,
  LineChartChartWrapper,
} from '@health-box/common'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const ChartWrapper = styled(Box)(() => LineChartChartWrapper as any)

interface DoughnutChartProps {
  title: string
  data: number
}

export const DoughnutChart: FC<DoughnutChartProps> = ({ title, data }) => {
  return (
    <ChartWrapper>
      <ItemTitle title={title} />
      <ChartWrapper>
        <Doughnut
          id="doughnut"
          options={doughnutChartConfig}
          data={doughnutDataConfig(data)}
        />
      </ChartWrapper>
    </ChartWrapper>
  )
}
