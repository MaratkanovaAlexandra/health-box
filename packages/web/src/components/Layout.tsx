import { GlobalStyles, theme } from "@/theme";
import { Box, ThemeProvider, styled } from "@mui/material";
import { ReactNode } from "react";
import { Nav } from "./Nav";
import { Header } from "./Header";

const Body = styled(Box)(({theme}) => ({
  paddingInline: '40px', width: '100%', display: 'flex',
  flexDirection: 'column',
}))

export const Layout = ({children}: {children: ReactNode | ReactNode[]}) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Box sx={{height: '100vh', display: 'flex'}}>
        <Nav/>
        <Body>
          <Header/>
          <Box sx={{ width: '100%', height: '100%', overflow: 'auto' }}>
            {children}
          </Box>
        </Body>
      </Box>
    </ThemeProvider>
  </>
)