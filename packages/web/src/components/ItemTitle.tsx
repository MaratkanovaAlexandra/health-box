import { FC } from 'react'
import {
  ItemTitleChartTitle,
  ItemTitleTitleText,
  ItemTitleTodayText,
} from '@health-box/common'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

interface ItemTitleProps {
  title: string
  today?: string
}

const ChartTitle = styled(Box)(
  ({ theme }) => ItemTitleChartTitle(theme.palette.divider) as any,
)
const TitleText = styled(Typography)(() => ItemTitleTitleText())
const TodayText = styled(Typography)(({ theme }) =>
  ItemTitleTodayText(theme.palette.primary.main),
)

export const ItemTitle: FC<ItemTitleProps> = ({ title, today }) => (
  <ChartTitle>
    <TitleText>{title}</TitleText>
    <TodayText>{today}</TodayText>
  </ChartTitle>
)
