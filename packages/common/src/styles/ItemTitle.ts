export const ItemTitleChartTitle = (color: string, isMobile?: boolean) => ({
  ...(isMobile ? undefined : { display: 'flex' }),
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  ...(isMobile
    ? {
        paddingTop: 0,
        paddingBottom: 10,
      }
    : { padding: '21px 0 27px' }),
  ...(isMobile ? undefined : { margin: '0 27px 0 36px' }),
  ...(isMobile
    ? {
        borderBottomWidth: 1,
        borderBottomColor: color,
      }
    : {
        borderBottom: `1px solid ${color}`,
      }),
})

export const ItemTitleTitleText = (isMobile?: boolean) => ({
  fontSize: isMobile ? 16 : '20px',
  lineHeight: isMobile ? 18 :'32px',
  ...(isMobile ? undefined : {
    letterSpacing: '-0.02em'
  })
})

export const ItemTitleTodayText = (color: string, isMobile?: boolean) => ({
  fontWeight: 500,
  fontSize: isMobile ? 20 : '32px',
  lineHeight: isMobile ?  24 : '38px',
  color,
})
