export const NavWrapper = (color: string) => ({
  backgroundColor: color,
  height: '100%',
})

export const NavLogoWrapper = {
  padding: '52px 32px',
  display: 'flex',
  alignItems: 'center',
  gap: '22px',
}

export const NavLogo = (color: string) => ({
  backgroundImage: 'url(/logo_bg.png)',
  padding: '3px',
  width: '52px',
  height: '52px',
  boxShadow: `8px -4px 10px 0px ${color}`,
})

export const NavNavButton = {
  width: '100%',
  padding: '20px 0 20px 37px',
  justifyContent: 'flex-start',
  borderRadius: 0,
}

export const NavButtonText = (color: string) => ({
  textTransform: 'capitalize',
  color,
})
