import React from 'react';
import { Box, Typography } from '@material-ui/core';

import useStyles from '../styles/Hero';

const Hero = () => {
  const classes = useStyles();

  return (
    <div>
      <Box display='flex'>
        <Box className={classes.navBar}>
          <div className={classes.navBtns}>
            <Typography variant="h5" className={classes.myName}><span>Ty Thanh Doan</span></Typography>
          </div>
          <div className={classes.navBtns}>
            <Typography variant="h5" className={classes.myWork}><span>My work</span></Typography>
          </div>
          <div className={classes.navBtns}>
            <Typography variant="h5" className={classes.mySkills}><span>My skills</span></Typography>
          </div>
          <div className={classes.navBtns} style={{marginRight: '10vw'}}>
            <Typography variant="h5" className={classes.aboutMe}><span>About Me</span></Typography>
          </div>
        </Box>
        <Box className={classes.navBarIcons}>
          
        </Box>
      </Box>
    </div>
  )
}

export default Hero
