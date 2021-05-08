import React from 'react';
import { Box, Typography } from '@material-ui/core';

import useStyles from '../styles/FeaturedProj';

const FeaturedProj = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.featuredBoxLeft}>
        <Box className={classes.featuredText}>
          <Typography variant="overline" gutterBottom>Featured Project</Typography>
          <Typography variant="h4" gutterBottom>Examin</Typography>
          <Typography variant="body1" gutterBottom>
            Skateboard fashion axe PBR, salvia 90's tacos raclette yr pinterest XOXO occupy. Post-ironic put a bird on it mixtape palo santo tilde hoodie williamsburg. Tilde cold-pressed fixie hella actually. Drinking vinegar man bun swag, yuccie whatever stumptown gentrify bicycle rights four dollar toast literally flexitarian sustainable blog air plant. Crucifix raw denim wolf synth organic pok pok chartreuse kinfolk portland gochujang everyday carry bicycle rights iceland meditation microdosing.
          </Typography>
        </Box>
      </Box>
      <Box className={classes.featuredBoxRight}>

      </Box>
    </>
  )
}

export default FeaturedProj
