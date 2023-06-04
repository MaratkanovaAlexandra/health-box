import 'chart.js/auto'

import { FC } from 'react'
import { Line } from 'react-chartjs-2'
import { ItemTitle } from '@/components'
import {
  colors,
  formatDataForLineChart,
  LineChartChartWrapper,
  lineChartConfig,
} from '@health-box/common'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const options = lineChartConfig(colors.lighter_gray, colors.middler_gray)
const ChartWrapper = styled(Box)(() => LineChartChartWrapper as any)

interface LineChartProps {
  title: string
  today: string
  data: number[]
}

export const LineChart: FC<LineChartProps> = ({ title, today, data }) => (
  <ChartWrapper>
    <ItemTitle title={title} today={today} />
    <ChartWrapper>
      <Line
        id="line"
        options={options}
        data={formatDataForLineChart(data, '')}
      />
    </ChartWrapper>
  </ChartWrapper>
)
