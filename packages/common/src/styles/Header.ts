export const HeaderBar = (borderColor: string, color: string) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  padding: '22px 0 5px',
  borderBottom: `1px solid ${borderColor}`,
  color,
})

export const HeaderToolbarItem = {
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
}
