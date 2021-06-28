import React from 'react';
import { Box } from '@material-ui/core';

import useStyles from '../styles/Referrals';

const Referrals = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.referralBlock}>
      </Box>
    </div>
  )
}

export default Referrals
