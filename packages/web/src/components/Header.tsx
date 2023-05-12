import { AppBar, Avatar, Box, Container, IconButton, Menu, Skeleton, Toolbar, Typography } from "@mui/material"
import { alpha, styled } from '@mui/material/styles'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';

const pages = ['Products', 'Pricing', 'Blog'];

const Bar = styled(AppBar)(({theme}) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  padding: '22px 0 5px',
  borderBottom: `1px solid ${theme.palette.background.default}`,
  color: theme.palette.text.primary
}))

const ToolbarItem = styled(Box)(({theme}) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
}))

export const Header = () => {
  return (
    <Bar position="static" >
       <Container maxWidth="xl">
        <Toolbar disableGutters>
            <ToolbarItem>
              <Skeleton variant="rounded" width={52} height={52} />
              <Typography>My Team</Typography>
              <IconButton>
                <ArrowDropDownIcon />
              </IconButton>
              <IconButton color="primary">
                <AddIcon />
              </IconButton>
            </ToolbarItem>

            <ToolbarItem sx={{marginLeft: 'auto'}}>
              <Avatar/>
              <Typography>First and Last Name</Typography>
              <IconButton>
                <ArrowDropDownIcon />
              </IconButton>
            </ToolbarItem>
        </Toolbar>
      </Container>
    </Bar>
  )
}