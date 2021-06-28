import React from 'react'
import { Box, Typography, Link } from '@material-ui/core';

import useStyles from '../styles/Projects';
import ScrollAnimation from 'react-animate-on-scroll';

const Projects = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Box className={classes.projectBoxLeft}>
          <Box className={classes.projectText}>
            <ScrollAnimation animateIn='fadeIn' animateOnce='true'>
              <Typography variant="overline" gutterBottom>Open Source Project</Typography>
              <Typography variant="h4" gutterBottom>CharFinance</Typography>
              <Typography variant="subtitle2" gutterBottom>
                <Link href="#" color="textPrimary">
                  Live Demo
                </Link>
                  &nbsp;&nbsp;||&nbsp;&nbsp;
                <Link href="https://github.com/tdoan35/CharFinance" color="textPrimary">
                  Github
                </Link>
              </Typography>
              <Typography variant="body1" gutterBottom>
              CharFinance is an Open Source Full Stack Financial Health Dashboard App that tracks user's financial data (like assets and liabilities) and populates a dashboard to track the user's financial health.
              </Typography>
            </ScrollAnimation>
          </Box>
        </Box>
        <Box className={classes.projectBoxRight}>
          <ScrollAnimation animateIn='fadeIn' animateOnce='true'>
            <div className={classes.projectImgBlock}>
              <img src="../assets/charfinance.gif" width="460" height="300"/>
            </div>
          </ScrollAnimation>
        </Box>
      </div>
      <div className={classes.root}>
        <Box className={classes.projectBoxLeft}>
          <Box className={classes.projectText}>
            <ScrollAnimation animateIn='fadeIn' animateOnce='true'>
              <Typography variant="overline" gutterBottom>Open Source Project</Typography>
              <Typography variant="h4" gutterBottom>bikeAlertr</Typography>
              <Typography variant="subtitle2" gutterBottom>
                <Link href="#" color="textPrimary">
                  Live Demo
                </Link>
                  &nbsp;&nbsp;||&nbsp;&nbsp;
                <Link href="https://github.com/bikeAlertr/bikeAlertr" color="textPrimary">
                  Github
                </Link>
              </Typography>
              <Typography variant="body1" gutterBottom>
              bikeAlertr is an Open Source Full Stack Application that takes data from the citiBike public API as well as the Google Maps API to populate citiBiki data and allows users to save their favorites stations and deliver alerts to the users when inventory runs low.              </Typography>
            </ScrollAnimation>
          </Box>
        </Box>
        <Box className={classes.projectBoxRight}>
          <ScrollAnimation animateIn='fadeIn' animateOnce='true'>
            <div className={classes.projectImgBlock}>
              <img src="../assets/bikealertr.gif" width="460" height="300"/>
            </div>
          </ScrollAnimation>
        </Box>
      </div>
      <div className={classes.root}>
        <Box className={classes.projectBoxLeft}>
          <Box className={classes.projectText}>
            <ScrollAnimation animateIn='fadeIn' animateOnce='true'>
              <Typography variant="overline" gutterBottom>Open Source Project</Typography>
              <Typography variant="h4" gutterBottom>medBay</Typography>
              <Typography variant="subtitle2" gutterBottom>
                <Link href="#" color="textPrimary">
                  Live Demo
                </Link>
                  &nbsp;&nbsp;||&nbsp;&nbsp;
                <Link href="https://github.com/tdoan35/medBay" color="textPrimary">
                  Github
                </Link>
              </Typography>
              <Typography variant="body1" gutterBottom>
              medBay is a Full Stack eCommerce App that has a full featured storefront, product search, user login/logout, and full user cart functionality.
              </Typography>
            </ScrollAnimation>
          </Box>
        </Box>
        <Box className={classes.projectBoxRight}>
          <ScrollAnimation animateIn='fadeIn' animateOnce='true'>
            <div className={classes.projectImgBlock}>
              <img src="../assets/medbay.gif" width="460" height="300"/>
            </div>
          </ScrollAnimation>
        </Box>
      </div>
      <div className={classes.root}>
        <div className={classes.prevWork}>
          <Link href="#">
            Previous Work
          </Link>
        </div>
      </div>
    </>
  )
}

export default Projects
