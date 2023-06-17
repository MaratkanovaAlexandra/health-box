import {
  NavButtonText,
  NavLogo,
  NavLogoWrapper,
  NavNavButton,
  NavWrapper,
  routes,
} from '@health-box/common'
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite'
import BrunchDiningIcon from '@mui/icons-material/BrunchDining'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import HomeIcon from '@mui/icons-material/Home'
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import { Avatar, Box, Button, Drawer, Toolbar, Typography } from '@mui/material'
import { alpha, styled, useTheme } from '@mui/material/styles'
import { redirect, useLocation } from 'react-router-dom'

const NAV_WIDTH = 276
const pages = [
  {
    title: 'Общее',
    path: routes.home,
    Icon: HomeIcon,
  },
  {
    title: 'Каллории',
    path: routes.calories,
    Icon: BrunchDiningIcon,
  },
  {
    title: 'Стаканы воды',
    path: routes.water,
    Icon: WaterDropIcon,
  },
  {
    title: 'Сон',
    path: routes.sleep,
    Icon: AirlineSeatIndividualSuiteIcon,
  },
  {
    title: 'Спорт',
    path: routes.sport,
    Icon: EmojiEventsIcon,
  },
]

const Wrapper = styled(Box)(({ theme }) =>
  NavWrapper(theme.palette.background.default),
)
const LogoWrapper = styled(Box)(() => NavLogoWrapper)
const Logo = styled(Avatar)(({ theme }) =>
  NavLogo(alpha(theme.palette.secondary.main, 0.4)),
)
const NavButton = styled(Button)(() => NavNavButton)
const ButtonText = styled(Typography)(
  ({ theme }) => NavButtonText(theme.palette.text.secondary) as any,
)

const Content = () => {
  const location = useLocation()
  const theme = useTheme()

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo alt="Our Logo" src="/logo.svg" />
        <Typography variant="h3">Health Box</Typography>
      </LogoWrapper>

      <Toolbar disableGutters sx={{ flexDirection: 'column' }}>
        {pages.map(({ Icon, title, path }) => {
          const selected = location.pathname === path

          return (
            <NavButton
              key={title}
              onClick={() => redirect(path)}
              sx={{
                borderRight: `4px solid ${
                  selected
                    ? alpha(theme.palette.primary.main, 0.4)
                    : 'transparent'
                }`,
                backgroundColor: selected
                  ? alpha(theme.palette.primary.main, 0.05)
                  : 'transparent',
              }}
              startIcon={
                <Icon
                  sx={{
                    height: '30px',
                    width: '30px',
                    color: selected ? 'primary' : '#000',
                  }}
                />
              }>
              <ButtonText variant="button">{title}</ButtonText>
            </NavButton>
          )
        })}
      </Toolbar>

      {/* <Toolbar sx={{ flexDirection: 'column' }}>
        <Box>
          <Button>Настройка</Button>
        </Box>
        <Box>
          <Button>Помощь</Button>
        </Box>
        <Box>
          <Button>Выйти</Button>
        </Box>
      </Toolbar> */}
    </Wrapper>
  )
}

export const Nav = () => {
  const isDesktop = true
  const open = false

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}>
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          sx={{
            height: '100%',
          }}
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              border: 'none',
              position: 'static',
            },
          }}>
          <Content />
        </Drawer>
      ) : (
        <Drawer
          open={open}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}>
          <Content />
        </Drawer>
      )}
    </Box>
  )
}
