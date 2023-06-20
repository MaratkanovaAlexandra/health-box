import { FC } from 'react'
import {
  DayGoalsIcons,
  DayGoalsIconWrapper,
  DayGoalsInfoText,
  DayGoalsTitle,
  DayGoalsWrapper,
  Firebase,
} from '@health-box/common'
import { routes } from '@health-box/common'
import { Records } from '@health-box/common'
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite'
import BrunchDiningIcon from '@mui/icons-material/BrunchDining'
import CancelIcon from '@mui/icons-material/Cancel'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import {
  Box,
  styled,
  SvgIconTypeMap,
  Typography,
  Unstable_Grid2 as Grid,
  useTheme,
} from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { useRouter } from 'next/router'

const Wrapper = styled(Box)(() => DayGoalsWrapper())
const Icons = styled(Box)(() => DayGoalsIcons() as any)
const InfoText = styled(Typography)(() => DayGoalsInfoText())
const Title = styled(Typography)(() => DayGoalsTitle())
const IconWrapper = styled(Box)(({ theme }) =>
  DayGoalsIconWrapper(theme.palette.background.default),
)

interface GoalProps {
  title: string
  Icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
    muiName: string
  }
  goal: number
  done: number
  scale: string
  route: string
}

const Goal: FC<GoalProps> = ({ route, Icon, title, goal, done, scale }) => {
  const theme = useTheme()
  const router = useRouter()
  const isDone = goal <= done

  return (
    <Grid xs={6} onClick={() => router.push(route)}>
      <Wrapper
        sx={{
          background: isDone
            ? 'url(/fulfilled-goal-bg.png)'
            : theme.palette.background.default,
          backgroundSize: 'cover',
        }}>
        <Icons>
          <Icon
            color="primary"
            sx={{
              width: '50px',
              height: '50px',
              color: isDone ? '#fff' : theme.palette.primary.main,
            }}
          />

          {isDone ? (
            <IconWrapper>
              <CheckCircleOutlineIcon color="success" />
            </IconWrapper>
          ) : (
            <CancelIcon color="error" />
          )}
        </Icons>
        <InfoText
          sx={{
            color: isDone
              ? theme.palette.background.default
              : theme.palette.text.secondary,
          }}>{`${done} / ${goal} ${scale}`}</InfoText>
        <Title
          sx={{
            color: isDone
              ? theme.palette.background.default
              : theme.palette.text.secondary,
          }}>
          {title}
        </Title>
      </Wrapper>
    </Grid>
  )
}

export const DayGoals = () => {
  return (
    <Box>
      <Grid container spacing={'25px'}>
        <Goal
          title={Firebase.stats.calories.name}
          Icon={BrunchDiningIcon}
          goal={Firebase.user?.calories_goal ?? 0}
          done={(Firebase.records.day.calories as Records[]).reduce(
            (a: number, b: Records) => a + b.value,
            0,
          )}
          scale={Firebase.stats.calories.scale}
          route={routes.calories}
        />
        <Goal
          title={Firebase.stats.water.name}
          Icon={WaterDropIcon}
          goal={Firebase.user?.water_goal ?? 0}
          done={(Firebase.records.day.water as Records[]).reduce(
            (a: number, b: Records) => a + b.value,
            0,
          )}
          scale={Firebase.stats.water.scale}
          route={routes.water}
        />
        <Goal
          title={Firebase.stats.sleep.name}
          Icon={AirlineSeatIndividualSuiteIcon}
          goal={Firebase.user?.sleep_goal ?? 0}
          done={(Firebase.records.day.sleep as Records[]).reduce(
            (a: number, b: Records) => a + b.value,
            0,
          )}
          scale={Firebase.stats.sleep.scale}
          route={routes.sleep}
        />
        <Goal
          title={Firebase.stats.sport.name}
          Icon={EmojiEventsIcon}
          goal={Firebase.user?.sport_goal ?? 0}
          done={(Firebase.records.day.sport as Records[]).reduce(
            (a: number, b: Records) => a + b.value,
            0,
          )}
          scale={Firebase.stats.sport.scale}
          route={routes.sport}
        />
      </Grid>
    </Box>
  )
}
