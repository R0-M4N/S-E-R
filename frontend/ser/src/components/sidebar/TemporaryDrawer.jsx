import { Drawer, Box, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react';
import './drawer.css';

const TemporaryDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
          Side Panel
        </Typography>
      </Box>
    </Drawer>
    </>
  )
}
export default TemporaryDrawer;