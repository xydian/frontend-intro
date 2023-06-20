import { Drawer, List, ListItem, ListItemText } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Box } from './components'

function App() {
  const drawerWidth = 240

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
            <ListItemText>Page 1 (Scene)</ListItemText>
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
