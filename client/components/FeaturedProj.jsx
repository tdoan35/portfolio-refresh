import React from 'react';
import { Box, Typography, Link } from '@material-ui/core';
import Particles from 'react-particles-js';

import useStyles from '../styles/FeaturedProj';
import ScrollAnimation from 'react-animate-on-scroll';

// import "animate.css/animate.min.css";

const FeaturedProj = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Box className={classes.featuredBoxLeft}>
          <Box className={classes.featuredText}>
            <ScrollAnimation animateIn='fadeIn'>
              <Typography variant="overline" gutterBottom>Featured Product</Typography>
              <Typography variant="h4" gutterBottom>Examin</Typography>
              <Typography variant="subtitle2" gutterBottom>
                <Link href="https://www.examin.dev/" color="textPrimary">
                  Website
                </Link>
                  &nbsp;&nbsp;||&nbsp;&nbsp;
                <Link href="https://github.com/oslabs-beta/Examin" color="textPrimary">
                  Github
                </Link>
              </Typography>
              <Typography variant="body1" gutterBottom>
              Examin is an open source developer tool that generates React unit tests for your application. Ensure your application renders as expected before adding new features. Examin writes the baseline unit tests and allows developers to customize their tests for their application.
              </Typography>
            </ScrollAnimation>
          </Box>
        </Box>
        <Box className={classes.featuredBoxRight}>
          <ScrollAnimation animateIn='fadeIn'>
            <div className={classes.featuredImgBlock}>
              <img src="../assets/examin-demo.gif" width="460" height="300"/>
            </div>
          </ScrollAnimation>
        </Box>
      </div>
      <Box className={classes.featureBreakBlock} display='flex'>
        <Particles 
          width={1500} 
          height={450}
          params={{
            "particles": {
              "number": {
                "value": 15,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 142.0465754938091,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "grab"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 131.86813186813188,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }}
        />
        <ScrollAnimation animateIn='fadeIn' style={{zIndex: 2}}>
          <div className={classes.bigRightCube}>
            <svg xmlns="http://www.w3.org/2000/svg" width="235.52" height="273.103" viewBox="0 0 235.52 273.103">
              <g id="Cube" transform="translate(-1186.127 -307.585)" opacity="1">
                <path id="Path_1" data-name="Path 1" d="M0,3.743,115.061-61.882,115,69.394.338,135.249Z" transform="translate(1303.502 439.818)" fill="#005d70"/>
                <path id="Path_2" data-name="Path 2" d="M114.919,3.246,229.145,69.018,114.929,135.036.911,69.118Z" transform="translate(1189.025 308.015)" fill="#00d3ff"/>
                <path id="Path_3" data-name="Path 3" d="M13.807-4.685,127.484,59.786V192.974L13.807,127.731Z" transform="translate(1176.019 383.89)" fill="#fff"/>
                <line id="Line_1" data-name="Line 1" y2="131.985" transform="translate(1189.5 377.613)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_2" data-name="Line 2" y2="131.985" transform="translate(1418.275 377.613)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_5" data-name="Line 5" y2="131.985" transform="translate(1303.887 443.606)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_3" data-name="Line 3" y2="131.985" transform="translate(1418.232 511.28) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_8" data-name="Line 8" y2="131.985" transform="translate(1303.845 311) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_6" data-name="Line 6" y2="131.985" transform="translate(1418.232 378.053) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_4" data-name="Line 4" y2="131.985" transform="translate(1189.542 511.28) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_9" data-name="Line 9" y2="131.985" transform="translate(1303.93 311) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_7" data-name="Line 7" y2="131.985" transform="translate(1189.542 378.053) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              </g>
            </svg>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn' style={{zIndex: 2}}>
          <div className={classes.medRightRightCube}>
            <svg xmlns="http://www.w3.org/2000/svg" width="134.764" height="155.788" viewBox="0 0 134.764 155.788">
              <g id="Cube" transform="translate(-1186.109 -307.585)">
                <path id="Path_1" data-name="Path 1" d="M0-25.17,64.367-61.882l-.032,73.438L.189,48.4Z" transform="translate(1253.275 410.327)" fill="#5b5b5b"/>
                <path id="Path_2" data-name="Path 2" d="M64.689,3.246l63.9,36.794L64.695,76.972.911,40.1Z" transform="translate(1188.833 307.9)" fill="#b1b1b1"/>
                <path id="Path_3" data-name="Path 3" d="M13.807-4.685,77.4,31.382v74.508l-63.593-36.5Z" transform="translate(1175.875 353.84)" fill="#fff"/>
                <line id="Line_1" data-name="Line 1" y2="73.835" transform="translate(1189.5 348.265)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_2" data-name="Line 2" y2="73.835" transform="translate(1317.481 348.265)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_5" data-name="Line 5" y2="73.835" transform="translate(1253.49 385.182)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_3" data-name="Line 3" y2="73.835" transform="translate(1317.457 423.04) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_8" data-name="Line 8" y2="73.835" transform="translate(1253.467 311) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_6" data-name="Line 6" y2="73.835" transform="translate(1317.457 348.511) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_4" data-name="Line 4" y2="73.835" transform="translate(1189.524 423.04) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_9" data-name="Line 9" y2="73.835" transform="translate(1253.514 311) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_7" data-name="Line 7" y2="73.835" transform="translate(1189.524 348.511) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              </g>
            </svg>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn' style={{zIndex: 1}}>
          <div className={classes.medRightTopCube}>
            <svg xmlns="http://www.w3.org/2000/svg" width="134.764" height="155.788" viewBox="0 0 134.764 155.788">
              <g id="Cube" transform="translate(-1186.109 -307.585)">
                <path id="Path_1" data-name="Path 1" d="M0-25.17,64.367-61.882l-.032,73.438L.189,48.4Z" transform="translate(1253.275 410.327)" fill="#5b5b5b"/>
                <path id="Path_2" data-name="Path 2" d="M64.689,3.246l63.9,36.794L64.695,76.972.911,40.1Z" transform="translate(1188.833 307.9)" fill="#b1b1b1"/>
                <path id="Path_3" data-name="Path 3" d="M13.807-4.685,77.4,31.382v74.508l-63.593-36.5Z" transform="translate(1175.875 353.84)" fill="#fff"/>
                <line id="Line_1" data-name="Line 1" y2="73.835" transform="translate(1189.5 348.265)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_2" data-name="Line 2" y2="73.835" transform="translate(1317.481 348.265)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_5" data-name="Line 5" y2="73.835" transform="translate(1253.49 385.182)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_3" data-name="Line 3" y2="73.835" transform="translate(1317.457 423.04) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_8" data-name="Line 8" y2="73.835" transform="translate(1253.467 311) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_6" data-name="Line 6" y2="73.835" transform="translate(1317.457 348.511) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_4" data-name="Line 4" y2="73.835" transform="translate(1189.524 423.04) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_9" data-name="Line 9" y2="73.835" transform="translate(1253.514 311) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_7" data-name="Line 7" y2="73.835" transform="translate(1189.524 348.511) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              </g>
            </svg>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn' style={{zIndex: 2}}>
          <div className={classes.medLeftRightCube}>
            <svg xmlns="http://www.w3.org/2000/svg" width="134.764" height="155.788" viewBox="0 0 134.764 155.788">
              <g id="Cube" transform="translate(-1186.109 -307.585)">
                <path id="Path_1" data-name="Path 1" d="M0-25.17,64.367-61.882l-.032,73.438L.189,48.4Z" transform="translate(1253.275 410.327)" fill="#5b5b5b"/>
                <path id="Path_2" data-name="Path 2" d="M64.689,3.246l63.9,36.794L64.695,76.972.911,40.1Z" transform="translate(1188.833 307.9)" fill="#b1b1b1"/>
                <path id="Path_3" data-name="Path 3" d="M13.807-4.685,77.4,31.382v74.508l-63.593-36.5Z" transform="translate(1175.875 353.84)" fill="#fff"/>
                <line id="Line_1" data-name="Line 1" y2="73.835" transform="translate(1189.5 348.265)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_2" data-name="Line 2" y2="73.835" transform="translate(1317.481 348.265)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_5" data-name="Line 5" y2="73.835" transform="translate(1253.49 385.182)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_3" data-name="Line 3" y2="73.835" transform="translate(1317.457 423.04) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_8" data-name="Line 8" y2="73.835" transform="translate(1253.467 311) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_6" data-name="Line 6" y2="73.835" transform="translate(1317.457 348.511) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_4" data-name="Line 4" y2="73.835" transform="translate(1189.524 423.04) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_9" data-name="Line 9" y2="73.835" transform="translate(1253.514 311) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_7" data-name="Line 7" y2="73.835" transform="translate(1189.524 348.511) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              </g>
            </svg>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn' style={{zIndex: 1}}>
          <div className={classes.medLeftTopCube}>
            <svg xmlns="http://www.w3.org/2000/svg" width="134.764" height="155.788" viewBox="0 0 134.764 155.788">
              <g id="Cube" transform="translate(-1186.109 -307.585)">
                <path id="Path_1" data-name="Path 1" d="M0-25.17,64.367-61.882l-.032,73.438L.189,48.4Z" transform="translate(1253.275 410.327)" fill="#5b5b5b"/>
                <path id="Path_2" data-name="Path 2" d="M64.689,3.246l63.9,36.794L64.695,76.972.911,40.1Z" transform="translate(1188.833 307.9)" fill="#b1b1b1"/>
                <path id="Path_3" data-name="Path 3" d="M13.807-4.685,77.4,31.382v74.508l-63.593-36.5Z" transform="translate(1175.875 353.84)" fill="#fff"/>
                <line id="Line_1" data-name="Line 1" y2="73.835" transform="translate(1189.5 348.265)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_2" data-name="Line 2" y2="73.835" transform="translate(1317.481 348.265)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_5" data-name="Line 5" y2="73.835" transform="translate(1253.49 385.182)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_3" data-name="Line 3" y2="73.835" transform="translate(1317.457 423.04) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_8" data-name="Line 8" y2="73.835" transform="translate(1253.467 311) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_6" data-name="Line 6" y2="73.835" transform="translate(1317.457 348.511) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_4" data-name="Line 4" y2="73.835" transform="translate(1189.524 423.04) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_9" data-name="Line 9" y2="73.835" transform="translate(1253.514 311) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_7" data-name="Line 7" y2="73.835" transform="translate(1189.524 348.511) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              </g>
            </svg>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn' style={{zIndex: 0}}>
          <div className={classes.smallRightRightCube}>
            <svg xmlns="http://www.w3.org/2000/svg" width="88.617" height="102.057" viewBox="0 0 88.617 102.057">
              <g id="Back_Small_Cube" data-name="Back Small Cube" transform="translate(-1186.1 -307.585)">
                <path id="Path_1" data-name="Path 1" d="M0-38.412l41.149-23.47-.02,46.948L.121,8.618Z" transform="translate(1230.271 396.82)" fill="#5b5b5b"/>
                <path id="Path_2" data-name="Path 2" d="M41.684,3.246,82.535,26.768,41.687,50.378.911,26.8Z" transform="translate(1188.745 307.847)" fill="#b1b1b1"/>
                <path id="Path_3" data-name="Path 3" d="M13.807-4.685,54.462,18.372V66L13.807,42.671Z" transform="translate(1175.809 340.077)" fill="#fff"/>
                <line id="Line_1" data-name="Line 1" y2="47.202" transform="translate(1189.5 334.823)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_2" data-name="Line 2" y2="47.202" transform="translate(1271.317 334.823)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_5" data-name="Line 5" y2="47.202" transform="translate(1230.409 358.424)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_3" data-name="Line 3" y2="47.202" transform="translate(1271.302 382.626) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_8" data-name="Line 8" y2="47.202" transform="translate(1230.393 311) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_6" data-name="Line 6" y2="47.202" transform="translate(1271.302 334.98) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_4" data-name="Line 4" y2="47.202" transform="translate(1189.515 382.626) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_9" data-name="Line 9" y2="47.202" transform="translate(1230.424 311) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_7" data-name="Line 7" y2="47.202" transform="translate(1189.515 334.98) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              </g>
            </svg>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn' style={{zIndex: 2}}>
          <div className={classes.smallRightMidCube}>
            <svg xmlns="http://www.w3.org/2000/svg" width="88.617" height="102.057" viewBox="0 0 88.617 102.057">
              <g id="Back_Small_Cube" data-name="Back Small Cube" transform="translate(-1186.1 -307.585)">
                <path id="Path_1" data-name="Path 1" d="M0-38.412l41.149-23.47-.02,46.948L.121,8.618Z" transform="translate(1230.271 396.82)" fill="#5b5b5b"/>
                <path id="Path_2" data-name="Path 2" d="M41.684,3.246,82.535,26.768,41.687,50.378.911,26.8Z" transform="translate(1188.745 307.847)" fill="#b1b1b1"/>
                <path id="Path_3" data-name="Path 3" d="M13.807-4.685,54.462,18.372V66L13.807,42.671Z" transform="translate(1175.809 340.077)" fill="#fff"/>
                <line id="Line_1" data-name="Line 1" y2="47.202" transform="translate(1189.5 334.823)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_2" data-name="Line 2" y2="47.202" transform="translate(1271.317 334.823)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_5" data-name="Line 5" y2="47.202" transform="translate(1230.409 358.424)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_3" data-name="Line 3" y2="47.202" transform="translate(1271.302 382.626) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_8" data-name="Line 8" y2="47.202" transform="translate(1230.393 311) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_6" data-name="Line 6" y2="47.202" transform="translate(1271.302 334.98) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_4" data-name="Line 4" y2="47.202" transform="translate(1189.515 382.626) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_9" data-name="Line 9" y2="47.202" transform="translate(1230.424 311) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
                <line id="Line_7" data-name="Line 7" y2="47.202" transform="translate(1189.515 334.98) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              </g>
            </svg>
          </div>
        </ScrollAnimation>
      </Box>
    </>
  );
};

export default FeaturedProj;
