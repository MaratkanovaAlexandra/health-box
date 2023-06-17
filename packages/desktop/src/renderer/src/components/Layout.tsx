import { ReactNode } from 'react'
import { LayoutBody, LayoutMain, LayoutWrapper } from '@health-box/common'
import { Box, styled } from '@mui/material'

import { Header } from './Header'
import { Nav } from './Nav'

const Body = styled(Box)(() => LayoutBody as any)

export const Layout = ({ children }: { children: ReactNode | ReactNode[] }) => (
  <>
    <Box sx={LayoutWrapper}>
      <Nav />
      <Body>
        <Header />
        <Box sx={LayoutMain}>{children}</Box>
      </Body>
    </Box>
  </>
)
