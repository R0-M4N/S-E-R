import { Drawer, Box, Typography, IconButton, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './drawer.css';

const TemporaryDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const user = 'robs';

  if (!user) {
  return (
      <>
      <IconButton 
      className='drawer-icon-button'
      edge='start'
      aria-label='logo'
      onClick={() => setIsDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Box className='drawer-box' role='presentation'>
          <Typography variant='h6' component='div'>
          </Typography>
          <List>
            {[{ text: 'Home', url: '/' }].map((item) => (
                <Link key={item.text} className='drawer-link' to={item.url} onClick={() => setIsDrawerOpen(false)}>
                  <ListItem button>
                    <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                </Link>
            ))}
          </List>
          <Divider />
          <List>
            {[{ text: 'Swapper', url: '/swap' },
              { text: 'Meal Plans', url: '/meal-plans' }].map((item) => (
                <Link key={item.text} disabled='true' className='drawer-link'>
                  <ListItem button disabled='true'>
                    <ListItemIcon>
                      {item.text === 'Swapper' ? <SwapHorizIcon /> : <RamenDiningIcon />}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                </Link>
            ))}
          </List>
        </Box>
      </Drawer>
      </>
    )}
     else {
      return (
        <>
    <IconButton 
    className='drawer-icon-button'
    edge='start'
    aria-label='logo'
    onClick={() => setIsDrawerOpen(true)}>
      <MenuIcon />
    </IconButton>
    <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
      <Box className='drawer-box' role='presentation'>
        <Typography variant='h6' component='div'>
        </Typography>
        <List>
          {[{ text: 'Home', url: '/' }].map((item) => (
              <Link key={item.text} className='drawer-link' to={item.url} onClick={() => setIsDrawerOpen(false)}>
                <ListItem button>
                  <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              </Link>
          ))}
        </List>
        <Divider />
        <List>
          {[{ text: 'Swapper', url: '/swap' },
            { text: 'Meal Plans', url: '/meal-plans' }].map((item) => (
              <Link key={item.text} className='drawer-link' to={item.url} onClick={() => setIsDrawerOpen(false)}>
                <ListItem button>
                  <ListItemIcon>
                    {item.text === 'Swapper' ? <SwapHorizIcon /> : <RamenDiningIcon />}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              </Link>
          ))}
        </List>
      </Box>
    </Drawer>
    </>
      )
    }
}
export default TemporaryDrawer;