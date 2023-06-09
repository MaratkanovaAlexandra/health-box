export const DayGoalsWrapper = (isMobile?: boolean) => ({
  width: isMobile ? '48.5%' : '100%',
  height: isMobile ? 190 : '190px',
  borderRadius: isMobile ? 32 : '32px',
  ...(isMobile ? { overflow: 'hidden' } : { padding: '16px', cursor: 'pointer' }),
})

export const DayGoalsIcons = (isMobile?: boolean) => ({
  width: '100%',
  ...(isMobile ? {
    paddingInline : 19,
    flexDirection: 'row',
  } : {
    padding: '0 19px',
    display: 'flex',
  }),
  justifyContent: 'space-between',
  marginBottom: isMobile ?  22 : '22px',
})

export const DayGoalsInfoText = (isMobile?: boolean) => ( {
  fontWeight: 500,
  fontSize: isMobile ? 18 :'24px',
})

export const DayGoalsTitle = (isMobile?: boolean) => ( {
  fontSize: isMobile ? 12 : '14px',
})

export const DayGoalsIconWrapper = (bgcolor: string, isMobile?: boolean) => ({
  height: isMobile? 34 : '34px',
  width: isMobile? 34 : '34px',
  ...(isMobile ? undefined : {display: 'flex'}),
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: bgcolor,
  borderRadius: isMobile? 100 : '50%',
})
