export const ItemTitleChartTitle = (color: string) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  padding: '21px 0 27px',
  margin: '0 27px 0 36px',
  borderBottom: `1px solid ${color}`,
})

export const ItemTitleTitleText = {
  fontSize: '20px',
  lineHeight: '32px',
  letterSpacing: '-0.02em',
}
export const ItemTitleTodayText = (color: string) => ({
  fontWeight: 500,
  fontSize: '32px',
  lineHeight: '38px',
  color,
})
