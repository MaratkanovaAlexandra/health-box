import { colors } from ".."

export const AddRecordWrapper = (isMobile?: boolean) => ({
  padding: isMobile ? 16: '16px',
  ...(isMobile ? {
    backgroundColor: colors.white,
    borderRadius: 32
  } : undefined),
})

export const AddRecordTextWrapper = (color: string, isMobile?: boolean) => ({
  backgroundColor: color,
  borderRadius: isMobile ? 100 : '100px',
  marginRight: 'auto',
})

export const AddRecordTitle = (isMobile?: boolean) => ({
  fontSize: isMobile? 14: '24px',
  ...(isMobile ? {
    paddingVertical: 8,
    paddingHorizontal: 16
  } : {
    padding: '8px 16px',
  })
})

export const AddRecordHeader = (isMobile?: boolean) => ({
  ...(isMobile ? {
    flexDirection: 'row',
  } : { display: 'flex' }),
  alignItems: 'center',
  paddingBottom: isMobile ? 8 : '16px',
})

export const AddRecordForm = (isMobile?: boolean) => ({
  ...(isMobile ?  {
    flexDirection: 'row',
  } : { display: 'flex' }),
  alignItems: 'center',
  padding: isMobile ? 16 : '16px',
})