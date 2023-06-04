import { HeaderBar, HeaderToolbarItem } from '@health-box/common'
import { Firebase } from '@health-box/common'
import AddIcon from '@mui/icons-material/Add'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Skeleton,
  Toolbar,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'

const Bar = styled(AppBar)(({ theme }) =>
  HeaderBar(theme.palette.background.default, theme.palette.text.primary),
)
const ToolbarItem = styled(Box)(() => HeaderToolbarItem)

export const Header = () => {
  return (
    <Bar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ToolbarItem sx={{ marginLeft: 'auto' }}>
            <Avatar />
            <Typography>
              {Firebase.user.first_name} {Firebase.user.last_name}
            </Typography>
            <IconButton>
              <ArrowDropDownIcon />
            </IconButton>
          </ToolbarItem>
        </Toolbar>
      </Container>
    </Bar>
  )
}
