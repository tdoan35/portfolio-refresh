import React from 'react';
import { Box, Button, Fade, Typography, SvgIcon } from '@material-ui/core';
import Particles from 'react-particles-js';

import useStyles from '../styles/Hero';

const Hero = () => {
  const classes = useStyles();

  return (
    <Box display='flex'>
      <Fade in={true} timeout={2000}>
        <Box className={classes.heroBox}>
          <Particles 
            width={2000} 
            height={845}
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
            <Typography variant="h2">Hi,</Typography>
            <Typography variant="h2">I'm Ty,</Typography>
            <Typography variant="h2" gutterBottom>software engineer.</Typography>
            <Typography variant="h5" gutterBottom>Mechanical Engineer {'>'}</Typography>
            <Button variant="outlined" style={{marginTop: 16}}>See My Work</Button>
          </Box>
        </Box>
      </Fade>
      <Fade in={true} timeout={2000}>
        <Box className={classes.whiteBox}>
          <Particles 
            width={600} 
            height={845}
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
      </Fade>
      <Box className={classes.cube}>
        <svg xmlns="http://www.w3.org/2000/svg" width="222.476" height="257.915" viewBox="0 0 222.476 257.915">
          <g id="Cube" transform="translate(-1186.125 -307.585)">
            <path id="Path_1" data-name="Path 1" d="M0,0,108.5-61.882l-.053,123.788L.318,124.005Z" transform="translate(1297 436)" fill="#5b5b5b"/>
            <path id="Path_2" data-name="Path 2" d="M108.416,3.246l107.712,62.02-107.7,62.252L.911,65.361Z" transform="translate(1189 308)" fill="#00d3ff"/>
            <path id="Path_3" data-name="Path 3" d="M13.807-4.685,121,56.109V181.7L13.807,120.179Z" transform="translate(1176 380)" fill="#fff"/>
            <line id="Line_1" data-name="Line 1" y2="124.457" transform="translate(1189.5 373.814)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
            <line id="Line_2" data-name="Line 2" y2="124.457" transform="translate(1405.226 373.814)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
            <line id="Line_5" data-name="Line 5" y2="124.457" transform="translate(1297.363 436.043)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
            <line id="Line_3" data-name="Line 3" y2="124.457" transform="translate(1405.186 499.856) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
            <line id="Line_8" data-name="Line 8" y2="124.457" transform="translate(1297.323 311) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
            <line id="Line_6" data-name="Line 6" y2="124.457" transform="translate(1405.186 374.229) rotate(60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
            <line id="Line_4" data-name="Line 4" y2="124.457" transform="translate(1189.54 499.856) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
            <line id="Line_9" data-name="Line 9" y2="124.457" transform="translate(1297.403 311) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
            <line id="Line_7" data-name="Line 7" y2="124.457" transform="translate(1189.54 374.229) rotate(-60)" fill="none" stroke="#929292" stroke-linecap="round" stroke-width="5"/>
          </g>
        </svg>
      </Box>
    </Box>
  )
}

export default Hero;
