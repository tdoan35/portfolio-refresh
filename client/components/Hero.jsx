import React from 'react';
import { Box, Button, Fade, Grow, Slide, Typography } from '@material-ui/core';
import Particles from 'react-particles-js';

import useStyles from '../styles/Hero';

const Hero = () => {
  const classes = useStyles();

  return (
    <Box display='flex'>
      {/* <Fade in={true} timeout={500}> */}
        <Box className={classes.heroBox}>
          <Particles 
            width={1300} 
            height={750}
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
          <Box className={classes.heroText}>
            <Typography variant="h4">Hi,</Typography>
            <Typography variant="h4">I'm Ty,</Typography>
            <Typography variant="h4" gutterBottom>software engineer.</Typography>
            <Typography variant="subtitle1" gutterBottom>Mechanical Engineer {'>'}</Typography>
            <Button variant="outlined" className={classes.seeWorkBtn}>See My Work</Button>
          </Box>
        </Box>
      {/* </Fade> */}
      <Box className={classes.whiteBox}>
        <Particles 
          width={500} 
          height={750}
          params={{
            "particles": {
              "number": {
                "value": 7,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#5B5B5B"
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
                "color": "#5B5B5B",
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
      </Box>
      <Slide in={true} direction='down' timeout={1000}>
        <Box className={classes.topRightCube}>
          <svg xmlns="http://www.w3.org/2000/svg" width="78.838" height="174.575" viewBox="0 0 78.838 174.575">
            <g id="Group_7" data-name="Group 7" transform="translate(-557.325 -182.585)">
              <path id="Polygon_4" data-name="Polygon 4" d="M42,0,84,73H0Z" transform="translate(632.5 186.5) rotate(90)" fill="#00d3ff"/>
              <path id="Path_1" data-name="Path 1" d="M0-20.54,72.485-61.882l-.036,82.7L.213,62.305Z" transform="translate(560.471 290.05)" fill="#5b5b5b"/>
              <line id="Line_2" data-name="Line 2" y2="83.147" transform="translate(632.774 227.965)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_5" data-name="Line 5" y2="83.147" transform="translate(560.713 269.538)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_3" data-name="Line 3" y2="83.147" transform="translate(632.748 312.171) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_6" data-name="Line 6" y2="83.147" transform="translate(632.748 228.242) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_9" data-name="Line 9" y2="83.147" transform="translate(560.74 186) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
            </g>
          </svg>
        </Box>
      </Slide>
      <Slide in={true} direction='down' timeout={1000}>
        <Box className={classes.topLeftCube}>
          <svg xmlns="http://www.w3.org/2000/svg" width="78.838" height="173.575" viewBox="0 0 78.838 173.575">
            <g id="Group_6" data-name="Group 6" transform="translate(-345.264 -189.585)">
              <path id="Polygon_2" data-name="Polygon 2" d="M42,0,84,73H0Z" transform="translate(347.5 276.5) rotate(-90)" fill="#00d3ff"/>
              <path id="Polygon_3" data-name="Polygon 3" d="M42,0,84,73H0Z" transform="translate(347.5 276.5) rotate(-90)" fill="#00d3ff"/>
              <path id="Path_3" data-name="Path 3" d="M13.807-4.685,85.42,35.93v83.9l-71.613-41.1Z" transform="translate(334.05 241.652)" fill="#fff"/>
              <line id="Line_1" data-name="Line 1" y2="83.147" transform="translate(348.652 234.965)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_4" data-name="Line 4" y2="83.147" transform="translate(348.679 318.171) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_29" data-name="Line 29" y2="83.147" transform="translate(420.713 193.538)" fill="none" stroke="#00d3ff" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_28" data-name="Line 28" y2="83.147" transform="translate(420.713 276.538)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_7" data-name="Line 7" y2="83.147" transform="translate(348.679 235.242) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_8" data-name="Line 8" y2="83.147" transform="translate(420.687 193) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
            </g>
          </svg>
        </Box>
      </Slide>
      <Slide in={true} direction='left' timeout={1000}>
        <Box className={classes.rightCube}>
          <svg xmlns="http://www.w3.org/2000/svg" width="150.899" height="174.575" viewBox="0 0 150.899 174.575">
            <g id="Cube" transform="translate(3.388 3.415)">
              <path id="Path_1" data-name="Path 1" d="M0-20.54,72.485-61.882l-.036,82.7L.213,62.305Z" transform="translate(71.818 104.05)" fill="#005d70"/>
              <path id="Path_2" data-name="Path 2" d="M72.733,3.246l71.96,41.435L72.739,86.27.911,44.744Z" transform="translate(-0.636 -3.082)" fill="#b1b1b1"/>
              <path id="Path_3" data-name="Path 3" d="M13.807-4.685,85.42,35.93v83.9l-71.613-41.1Z" transform="translate(-13.602 47.652)" fill="#fff"/>
              <line id="Line_1" data-name="Line 1" y2="83.147" transform="translate(0 41.965)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_2" data-name="Line 2" y2="83.147" transform="translate(144.122 41.965)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_5" data-name="Line 5" y2="83.147" transform="translate(72.061 83.538)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_3" data-name="Line 3" y2="83.147" transform="translate(144.095 126.171) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_8" data-name="Line 8" y2="83.147" transform="translate(72.034 0) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_6" data-name="Line 6" y2="83.147" transform="translate(144.095 42.242) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_4" data-name="Line 4" y2="83.147" transform="translate(0.027 126.171) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_9" data-name="Line 9" y2="83.147" transform="translate(72.088 0) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_7" data-name="Line 7" y2="83.147" transform="translate(0.027 42.242) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
            </g>
          </svg>
        </Box>
      </Slide>
      <Slide in={true} direction='left' timeout={1500}>
        <Box className={classes.rightRightCube}>
          <svg xmlns="http://www.w3.org/2000/svg" width="247.318" height="172.604" viewBox="0 0 247.318 172.604">
            <g id="Cube" transform="translate(-1088 -307.585)">
              <path id="Path_1" data-name="Path 1" d="M0-21.026,71.634-61.882,71.6,19.846.21,60.846Z" transform="translate(1260.474 414.555)" fill="#005d70"/>
              <path id="Path_2" data-name="Path 2" d="M71.889,3.246,143,44.194,71.9,85.295.911,44.256Z" transform="translate(1188.86 307.916)" fill="#00d3ff"/>
              <path id="Path_3" data-name="Path 3" d="M13.807-4.685,84.579,35.453v82.919L13.807,77.754Z" transform="translate(1175.896 358.148)" fill="#fff"/>
              <line id="Line_1" data-name="Line 1" y2="82.17" transform="translate(1189.5 352.472)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_2" data-name="Line 2" y2="82.17" transform="translate(1331.929 352.472)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_5" data-name="Line 5" y2="82.17" transform="translate(1260.714 393.557)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_3" data-name="Line 3" y2="82.17" transform="translate(1331.902 435.689) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_8" data-name="Line 8" y2="82.17" transform="translate(1260.688 311) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_6" data-name="Line 6" y2="82.17" transform="translate(1331.902 352.745) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_4" data-name="Line 4" y2="82.17" transform="translate(1189.526 435.689) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_9" data-name="Line 9" y2="82.17" transform="translate(1260.741 311) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_7" data-name="Line 7" y2="82.17" transform="translate(1189.526 352.745) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
            </g>
            <rect id="Rectangle_14" data-name="Rectangle 14" width="102" height="90" transform="translate(0 41.415)" fill="rgba(255,255,255,0)"/>
          </svg>
        </Box>
      </Slide>
      <Slide in={true} direction='right' timeout={1000}>
        <Box className={classes.leftCube}>
          <svg xmlns="http://www.w3.org/2000/svg" width="150.899" height="174.575" viewBox="0 0 150.899 174.575">
            <g id="Cube" transform="translate(3.388 3.415)">
              <path id="Path_1" data-name="Path 1" d="M0-20.54,72.485-61.882l-.036,82.7L.213,62.305Z" transform="translate(71.818 104.05)" fill="#5b5b5b"/>
              <path id="Path_2" data-name="Path 2" d="M72.733,3.246l71.96,41.435L72.739,86.27.911,44.744Z" transform="translate(-0.636 -3.082)" fill="#b1b1b1"/>
              <path id="Path_3" data-name="Path 3" d="M13.807-4.685,85.42,35.93v83.9l-71.613-41.1Z" transform="translate(-13.602 47.652)" fill="#fff"/>
              <line id="Line_1" data-name="Line 1" y2="83.147" transform="translate(0 41.965)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_2" data-name="Line 2" y2="83.147" transform="translate(144.122 41.965)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_5" data-name="Line 5" y2="83.147" transform="translate(72.061 83.538)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_3" data-name="Line 3" y2="83.147" transform="translate(144.095 126.171) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_8" data-name="Line 8" y2="83.147" transform="translate(72.034 0) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_6" data-name="Line 6" y2="83.147" transform="translate(144.095 42.242) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_4" data-name="Line 4" y2="83.147" transform="translate(0.027 126.171) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_9" data-name="Line 9" y2="83.147" transform="translate(72.088 0) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_7" data-name="Line 7" y2="83.147" transform="translate(0.027 42.242) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
            </g>
          </svg>
        </Box>
      </Slide>
      <Slide in={true} direction='right' timeout={1500}>
        <Box className={classes.leftLeftCube}>
          <svg xmlns="http://www.w3.org/2000/svg" width="249.888" height="174.575" viewBox="0 0 249.888 174.575">
            <g id="Cube" transform="translate(3.388 3.415)">
              <path id="Path_1" data-name="Path 1" d="M0-20.54,72.485-61.882l-.036,82.7L.213,62.305Z" transform="translate(68.818 105.05)" fill="#5b5b5b"/>
              <path id="Path_2" data-name="Path 2" d="M72.733,3.246l71.96,41.435L72.739,86.27.911,44.744Z" transform="translate(-0.636 -3.082)" fill="#b1b1b1"/>
              <path id="Path_3" data-name="Path 3" d="M13.807-4.685,85.42,35.93v83.9l-71.613-41.1Z" transform="translate(-13.602 47.652)" fill="#fff"/>
              <line id="Line_1" data-name="Line 1" y2="83.147" transform="translate(0 41.965)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_2" data-name="Line 2" y2="83.147" transform="translate(144.122 41.965)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_5" data-name="Line 5" y2="83.147" transform="translate(72.061 83.538)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_3" data-name="Line 3" y2="83.147" transform="translate(144.095 126.171) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_8" data-name="Line 8" y2="83.147" transform="translate(72.034 0) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_6" data-name="Line 6" y2="83.147" transform="translate(144.095 42.242) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_4" data-name="Line 4" y2="83.147" transform="translate(0.027 126.171) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_9" data-name="Line 9" y2="83.147" transform="translate(72.088 0) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_7" data-name="Line 7" y2="83.147" transform="translate(0.027 42.242) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
            </g>
            <rect id="Rectangle_14" data-name="Rectangle 14" width="102" height="90" transform="translate(147.888 42.48)" fill="rgba(255,255,255,0)"/>
          </svg>
        </Box>
      </Slide>
      <Slide in={true} direction='down' timeout={1500}>
        <Box className={classes.leftLeftTopCube}>
          <svg xmlns="http://www.w3.org/2000/svg" width="249.888" height="174.575" viewBox="0 0 249.888 174.575">
            <g id="Cube" transform="translate(3.388 3.415)">
              <path id="Path_1" data-name="Path 1" d="M0-20.54,72.485-61.882l-.036,82.7L.213,62.305Z" transform="translate(68.818 105.05)" fill="#5b5b5b"/>
              <path id="Path_2" data-name="Path 2" d="M72.733,3.246l71.96,41.435L72.739,86.27.911,44.744Z" transform="translate(-0.636 -3.082)" fill="#b1b1b1"/>
              <path id="Path_3" data-name="Path 3" d="M13.807-4.685,85.42,35.93v83.9l-71.613-41.1Z" transform="translate(-13.602 47.652)" fill="#fff"/>
              <line id="Line_1" data-name="Line 1" y2="83.147" transform="translate(0 41.965)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_2" data-name="Line 2" y2="83.147" transform="translate(144.122 41.965)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_5" data-name="Line 5" y2="83.147" transform="translate(72.061 83.538)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_3" data-name="Line 3" y2="83.147" transform="translate(144.095 126.171) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_8" data-name="Line 8" y2="83.147" transform="translate(72.034 0) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_6" data-name="Line 6" y2="83.147" transform="translate(144.095 42.242) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_4" data-name="Line 4" y2="83.147" transform="translate(0.027 126.171) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_9" data-name="Line 9" y2="83.147" transform="translate(72.088 0) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_7" data-name="Line 7" y2="83.147" transform="translate(0.027 42.242) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
            </g>
            <rect id="Rectangle_14" data-name="Rectangle 14" width="102" height="90" transform="translate(147.888 42.48)" fill="rgba(255,255,255,0)"/>
          </svg>
        </Box>
      </Slide>
      <Slide in={true} direction='down' timeout={2000}>
        <Box className={classes.leftSmallTopCube}>
          <svg xmlns="http://www.w3.org/2000/svg" width="314.9" height="101.503" viewBox="0 0 314.9 101.503">
            <g id="Front_Small_Cube" data-name="Front Small Cube" transform="translate(-1186.1 -307.585)">
              <path id="Path_1" data-name="Path 1" d="M0-38.549,40.91-61.882l-.02,46.675L.12,8.208Z" transform="translate(1230.033 396.681)" fill="#5b5b5b"/>
              <path id="Path_2" data-name="Path 2" d="M41.446,3.246,82.06,26.631,41.45,50.1.911,26.667Z" transform="translate(1188.744 307.847)" fill="#b1b1b1"/>
              <path id="Path_3" data-name="Path 3" d="M13.807-4.685,54.225,18.238V65.593L13.807,42.4Z" transform="translate(1175.808 339.935)" fill="#fff"/>
              <line id="Line_1" data-name="Line 1" y2="46.928" transform="translate(1189.5 334.684)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_2" data-name="Line 2" y2="46.928" transform="translate(1270.841 334.684)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_5" data-name="Line 5" y2="46.928" transform="translate(1230.171 358.148)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_3" data-name="Line 3" y2="46.928" transform="translate(1270.826 382.21) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_8" data-name="Line 8" y2="46.928" transform="translate(1230.156 311) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_6" data-name="Line 6" y2="46.928" transform="translate(1270.826 334.841) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_4" data-name="Line 4" y2="46.928" transform="translate(1189.515 382.21) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_9" data-name="Line 9" y2="46.928" transform="translate(1230.186 311) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_7" data-name="Line 7" y2="46.928" transform="translate(1189.515 334.841) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
            </g>
            <rect id="Rectangle_15" data-name="Rectangle 15" width="230" height="50" transform="translate(84.9 25.415)" fill="rgba(255,255,255,0)"/>
          </svg>
        </Box>
      </Slide>
      <Slide in={true} direction='right' timeout={2000}>
        <Box className={classes.leftSmallBottomCube}>
          <svg xmlns="http://www.w3.org/2000/svg" width="314.9" height="101.503" viewBox="0 0 314.9 101.503">
            <g id="Front_Small_Cube" data-name="Front Small Cube" transform="translate(-1186.1 -307.585)">
              <path id="Path_1" data-name="Path 1" d="M0-38.549,40.91-61.882l-.02,46.675L.12,8.208Z" transform="translate(1230.033 396.681)" fill="#5b5b5b"/>
              <path id="Path_2" data-name="Path 2" d="M41.446,3.246,82.06,26.631,41.45,50.1.911,26.667Z" transform="translate(1188.744 307.847)" fill="#b1b1b1"/>
              <path id="Path_3" data-name="Path 3" d="M13.807-4.685,54.225,18.238V65.593L13.807,42.4Z" transform="translate(1175.808 339.935)" fill="#fff"/>
              <line id="Line_1" data-name="Line 1" y2="46.928" transform="translate(1189.5 334.684)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_2" data-name="Line 2" y2="46.928" transform="translate(1270.841 334.684)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_5" data-name="Line 5" y2="46.928" transform="translate(1230.171 358.148)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_3" data-name="Line 3" y2="46.928" transform="translate(1270.826 382.21) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_8" data-name="Line 8" y2="46.928" transform="translate(1230.156 311) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_6" data-name="Line 6" y2="46.928" transform="translate(1270.826 334.841) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_4" data-name="Line 4" y2="46.928" transform="translate(1189.515 382.21) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_9" data-name="Line 9" y2="46.928" transform="translate(1230.186 311) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_7" data-name="Line 7" y2="46.928" transform="translate(1189.515 334.841) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
            </g>
            <rect id="Rectangle_15" data-name="Rectangle 15" width="230" height="50" transform="translate(84.9 25.415)" fill="rgba(255,255,255,0)"/>
          </svg>
        </Box>
      </Slide>
      <Slide in={true} direction='up' timeout={1500}>
        <Box className={classes.bottomRightCube}>
          <svg xmlns="http://www.w3.org/2000/svg" width="58.728" height="127.729" viewBox="0 0 58.728 127.729">
            <g id="Group_7" data-name="Group 7" transform="translate(-511.863 -675.445)">
              <path id="Polygon_5" data-name="Polygon 5" d="M30.271,0,60.541,52.613H0Z" transform="translate(566.998 679.221) rotate(90)" fill="#b1b1b1"/>
              <path id="Path_5" data-name="Path 5" d="M0-32.086l52.243-29.8-.026,59.6L.153,27.624Z" transform="translate(515.084 771.134)" fill="#5b5b5b"/>
              <line id="Line_30" data-name="Line 30" y2="59.927" transform="translate(567.195 709.105)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_31" data-name="Line 31" y2="59.927" transform="translate(515.259 739.069)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_32" data-name="Line 32" y2="59.927" transform="translate(567.176 769.796) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_33" data-name="Line 33" y2="59.927" transform="translate(567.176 709.305) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_34" data-name="Line 34" y2="59.927" transform="translate(515.278 678.86) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_35" data-name="Line 35" y2="59.927" transform="translate(515.259 739.069)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
            </g>
          </svg>
        </Box>
      </Slide>
      <Slide in={true} direction='up' timeout={1500}>
        <Box className={classes.bottomLeftCube}>
          <svg xmlns="http://www.w3.org/2000/svg" width="58.729" height="127.008" viewBox="0 0 58.729 127.008">
            <g id="Group_8" data-name="Group 8" transform="translate(-428.935 -675.445)">
              <path id="Polygon_2" data-name="Polygon 2" d="M30.271,0,60.541,52.613H0Z" transform="translate(431.5 739.041) rotate(-90)" fill="#00d3ff"/>
              <path id="Polygon_3" data-name="Polygon 3" d="M30.271,0,60.541,52.613H0Z" transform="translate(431.5 739.041) rotate(-90)" fill="#b1b1b1"/>
              <path id="Path_3" data-name="Path 3" d="M13.807-4.685,65.421,24.588V85.06L13.807,55.438Z" transform="translate(417.95 715.234)" fill="#fff"/>
              <line id="Line_1" data-name="Line 1" y2="59.927" transform="translate(432.331 709.105)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_4" data-name="Line 4" y2="59.927" transform="translate(432.35 769.075) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_29" data-name="Line 29" y2="59.927" transform="translate(484.267 679.248)" fill="none" stroke="#b1b1b1" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_28" data-name="Line 28" y2="59.927" transform="translate(484.267 739.069)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_7" data-name="Line 7" y2="59.927" transform="translate(432.35 709.305) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_8" data-name="Line 8" y2="59.927" transform="translate(484.248 678.86) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
            </g>
          </svg>
        </Box>
      </Slide>
      <Slide in={true} direction='up' timeout={2000}>
        <Box className={classes.bottomRightSmallCube}>
          <svg xmlns="http://www.w3.org/2000/svg" width="33.393" height="68.71" viewBox="0 0 33.393 68.71">
            <g id="Group_9" data-name="Group 9" transform="translate(2.958 3.415)">
              <path id="Polygon_5" data-name="Polygon 5" d="M15.494,0,30.987,26.929H0Z" transform="translate(26.929 0.184) rotate(90)" fill="#b1b1b1"/>
              <path id="Path_5" data-name="Path 5" d="M0-46.631,26.739-61.882l-.013,30.508L.078-16.07Z" transform="translate(0.358 77.437)" fill="#5b5b5b"/>
              <line id="Line_30" data-name="Line 30" y2="30.673" transform="translate(27.03 15.48)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_31" data-name="Line 31" y2="30.673" transform="translate(0.448 30.817)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_32" data-name="Line 32" y2="30.672" transform="translate(27.02 46.544) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_33" data-name="Line 33" y2="30.672" transform="translate(27.02 15.583) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_34" data-name="Line 34" y2="30.672" transform="translate(0.457 0) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_35" data-name="Line 35" y2="30.673" transform="translate(0.448 30.817)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
            </g>
          </svg>
        </Box>
      </Slide>
      <Slide in={true} direction='up' timeout={2000}>
        <Box className={classes.bottomLeftSmallCube}>
          <svg xmlns="http://www.w3.org/2000/svg" width="33.393" height="68.341" viewBox="0 0 33.393 68.341">
            <g id="Group_10" data-name="Group 10" transform="translate(2.98 3.231)">
              <path id="Polygon_2" data-name="Polygon 2" d="M15.494,0,30.987,26.929H0Z" transform="translate(0 30.987) rotate(-90)" fill="#00d3ff"/>
              <path id="Polygon_3" data-name="Polygon 3" d="M15.494,0,30.987,26.929H0Z" transform="translate(0 30.987) rotate(-90)" fill="#b1b1b1"/>
              <path id="Path_3" data-name="Path 3" d="M13.807-4.685,40.225,10.3V41.25L13.807,26.088Z" transform="translate(-13.675 21.088)" fill="#fff"/>
              <line id="Line_1" data-name="Line 1" y2="30.673" transform="translate(0.425 15.665)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_4" data-name="Line 4" y2="30.672" transform="translate(0.435 46.359) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_29" data-name="Line 29" y2="30.673" transform="translate(27.008 0.383)" fill="none" stroke="#b1b1b1" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_28" data-name="Line 28" y2="30.673" transform="translate(27.008 31.001)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_7" data-name="Line 7" y2="30.672" transform="translate(0.435 15.767) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
              <line id="Line_8" data-name="Line 8" y2="30.672" transform="translate(26.998 0.184) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
            </g>
          </svg>
        </Box>
      </Slide>
    </Box>
  )
}

export default Hero;
