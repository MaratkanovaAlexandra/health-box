import React from 'react';
import {ItemTitle} from '../components';
import {LinksWrapper} from '@health-box/common';
import {List} from 'react-native-paper';
// import AndroidIcon from '@mui/icons-material/Android'
// import AppleIcon from '@mui/icons-material/Apple'
// import LanguageIcon from '@mui/icons-material/Language'
// import PersonalVideoIcon from '@mui/icons-material/PersonalVideo'
// import { Avatar, IconButton, Link, List, useTheme } from '@mui/material'

// const platforms = [LanguageIcon, PersonalVideoIcon, AndroidIcon, AppleIcon];

export const Links = () => {
  return (
    <>
      <ItemTitle title="Наше приложение для других патформ" />
      <List.Section>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Section>
      {/* <List sx={LinksWrapper}>
        {platforms.map((Platform, index) => (
          <Link key={index}>
            <IconButton>
              <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                <Platform />
              </Avatar>
            </IconButton>
          </Link>
        ))}
      </List> */}
    </>
  );
};
