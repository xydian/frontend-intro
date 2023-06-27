import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Box } from './components'
import { Object3D, Vector3 } from 'three'
import { useEffect } from 'react'

function App() {
  const drawerWidth = 240

  useEffect(() => {
    // ModuGen uses the z-axis as the default up direction
    Object3D.DEFAULT_UP = new Vector3(0, 0, 1)
  }, [])

  return (
    <Box display="flex">
      <Drawer
        variant="permanent"
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <List>
          <ListItem>
            <ListItemButton href="/">
              <ListItemText>Scene with perspective camera</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton href="/page2">
              <ListItemText>Scene with orthographic camera</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton href="/page3">
              <ListItemText>
                Scene with orthographic camera and Form
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Outlet />
      </Box>
    </Box>
  )
}

export default App
