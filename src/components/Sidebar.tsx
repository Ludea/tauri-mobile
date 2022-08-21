import { useEffect } from 'react'
import Drawer from '@mui/material/Drawer'
import useTheme from '@mui/material/styles/useTheme';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import NavItem from 'components/Navitem';
import PropTypes from 'prop-types';
//import theme from 'theme/index';
import { useLocation } from 'react-router-dom';

const items = [
  {
    href: '/',
    title: 'Index'
  }
]

const Sidebar = (props: any) => {
  const { open, onClose } = props;
  const location = useLocation();
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });
 
  useEffect(() => {
    if (open) {
        onClose?.();
    }
  }, []);

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item: any) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
      </Box>
    </>
  );
 
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};

export default Sidebar;
