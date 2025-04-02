"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookIcon from '@mui/icons-material/Book';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: "primary.main",
            color: "white"
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Divider />
        <List>
          <ListItem key="perfil" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleIcon sx={{color: "white"}}/>
              </ListItemIcon>
                <ListItemText primary="Perfil" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key="diario" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BookIcon sx={{color: "white"}}/>
              </ListItemIcon>
                <ListItemText primary="Diário" />
            </ListItemButton>
          </ListItem>
          <ListItem key="calendario" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BookIcon sx={{color: "white"}}/>
              </ListItemIcon>
                <ListItemText primary="Diário" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
