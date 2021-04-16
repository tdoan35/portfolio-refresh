import React from 'react';
import { Box, Typography, ButtonBase, IconButton, Fade } from '@material-ui/core';
import { LinkedIn, GitHub, Twitter } from '@material-ui/icons';

import useStyles from '../styles/NavBar';

const NavBar = () => {
  const classes = useStyles();

  
  return (
    <Box display='flex'>
      <Fade in={true} timeout={1000}>
        <Box className={classes.navBar}>
          <ButtonBase focusRipple className={classes.navBtns}>
            <Typography variant="h5" className={classes.myName}><span>Ty Thanh Doan</span></Typography>
          </ButtonBase>
          <ButtonBase focusRipple className={classes.navBtns}>
            <Typography variant="h5" className={classes.myWork}><span>My work</span></Typography>
          </ButtonBase>
          <ButtonBase focusRipple className={classes.navBtns}>
            <Typography variant="h5" className={classes.mySkills}><span>My skills</span></Typography>
          </ButtonBase>
          <ButtonBase focusRipple className={classes.navBtns} style={{marginRight: '10vw'}}>
            <Typography variant="h5" className={classes.aboutMe}><span>About Me</span></Typography>
          </ButtonBase>
        </Box>
      </Fade>
      <Fade in={true} timeout={2000}>
        <Box className={classes.navBarIcons}>
            <IconButton>
              <LinkedIn />
            </IconButton>
            <IconButton>
              <Twitter />
            </IconButton>
            <IconButton>
              <GitHub />
            </IconButton>
        </Box>
      </Fade>
    </Box>
  )
}

export default NavBar
