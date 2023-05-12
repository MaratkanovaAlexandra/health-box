import { Avatar, Box, Button, Drawer, Toolbar, Typography } from '@mui/material'
import { alpha, styled, useTheme } from '@mui/material/styles'
import LogoIcon from 'public/logo.svg'
import LogoBG from 'public/logo_bg.png'
import HomeIcon from '@mui/icons-material/Home'
import BrunchDiningIcon from '@mui/icons-material/BrunchDining'
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import { routes } from '@/utils'
import { useRouter } from 'next/router'

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

const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100%',
}))

const LogoWrapper = styled(Box)(({ theme }) => ({
  padding: '52px 32px',
  display: 'flex',
  alignItems: 'center',
  gap: '22px',
}))

const Logo = styled(Avatar)(({ theme }) => ({
  backgroundImage: `url(${LogoBG.src})`,
  padding: '3px',
  width: '52px',
  height: '52px',
  boxShadow: `8px -4px 10px 0px ${alpha(theme.palette.custom.blue, 0.4)}`,
}))

const NavButton = styled(Button)(({ theme }) => ({
  width: '100%',
  padding: '20px 0 20px 37px',
  justifyContent: 'flex-start',
  borderRadius: 0,
}))

const ButtonText = styled(Typography)(({ theme }) => ({
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
}))

const Content = () => {
  const { asPath, push } = useRouter()
  const theme = useTheme()

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo alt="Our Logo" src={LogoIcon.src} />
        <Typography variant="h3">Health Box</Typography>
      </LogoWrapper>

      <Toolbar disableGutters sx={{ flexDirection: 'column' }}>
        {pages.map(({ Icon, title, path }) => {
          const selected = asPath === path

          return (
            <NavButton
              key={title}
              onClick={() => push(path)}
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
