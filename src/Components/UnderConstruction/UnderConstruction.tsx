import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';
import Particles from 'react-particles-js';
import colors from '../Core/colors';
import logo from '../Hero/logobw.png';

export default function UnderConstruction() {
  const useStyles = makeStyles((theme) => ({
    wrapper: {
      margin: '-10px 0px 0px 0px',
      width: '100vw',
      height: '100vh',
      backgroundColor: colors.blue,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    particles: {
      height: '100vh',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
    },
    content: {
      position: 'relative',
      zIndex: 1,
      textAlign: 'center',
      padding: theme.spacing(4),
      maxWidth: '800px',
    },
    logo: {
      display: 'block',
      margin: '0 auto 40px',
      maxWidth: '400px',
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        maxWidth: '250px',
        marginBottom: '30px',
      },
    },
    title: {
      color: colors.white,
      fontFamily: 'Spartan, sans-serif',
      fontSize: '48px',
      fontWeight: 700,
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        fontSize: '32px',
        marginBottom: theme.spacing(2),
      },
    },
    message: {
      color: colors.white,
      fontFamily: 'Spartan, sans-serif',
      fontSize: '24px',
      lineHeight: 1.6,
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        fontSize: '18px',
      },
    },
    subMessage: {
      color: colors.white,
      fontFamily: 'Spartan, sans-serif',
      fontSize: '18px',
      opacity: 0.9,
      marginTop: theme.spacing(4),
      [theme.breakpoints.down('xs')]: {
        fontSize: '16px',
        marginTop: theme.spacing(2),
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.wrapper} style={{ overflowX: 'hidden' }}>
      <Particles
        className={classes.particles}
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: {
              value: colors.white,
            },
            opacity: {
              value: 0.3,
            },
            size: {
              value: 3,
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: colors.white,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
          },
          retina_detect: true,
        }}
      />
      <Container className={classes.content}>
        <img
          alt="Millburn Robotics"
          className={classes.logo}
          src={logo}
        />
        <Typography variant="h1" className={classes.title}>
          Under Construction
        </Typography>
        <Typography variant="body1" className={classes.message}>
          We're making some exciting improvements to our website!
        </Typography>
        <Typography variant="body2" className={classes.message}>
          Please check back soon for the updated experience.
        </Typography>
        <Typography variant="body2" className={classes.subMessage}>
          Thank you for your patience.
        </Typography>
      </Container>
    </div>
  );
}
