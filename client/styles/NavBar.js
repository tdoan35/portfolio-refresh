import { makeStyles } from '@material-ui/core/styles';

const navBarHeight = 85;

export default makeStyles((theme) => ({
  navBar: {
    height: navBarHeight,
    width: '68%',
    backgroundColor: '#4D4D4D',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  navBtns: {
    transition: theme.transitions.create(['background-color', 'transform'], {
      duration: theme.transitions.duration.standard,
    }),
    display: 'flex',
    alignItems: 'center',
    height: 40,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'gray',
      borderRadius: 5
    },
    borderRadius: 5,
    maxWidth: 150,
    whiteSpace: 'nowrap',
  },
  myName: {
    color: '#00D3FF',
    fontFamily: 'Roboto, Arial',
    fontWeight: 700,
    paddingLeft: 50,
    paddingRight: 50,
  },
  myWork: {
    color: '#FFFFFF',
    fontFamily: 'Roboto, Arial',
    fontWeight: 100,
    paddingLeft: 50,
    paddingRight: 50,
  },
  mySkills: {
    color: '#FFFFFF',
    fontFamily: 'Roboto, Arial',
    fontWeight: 100,
    paddingLeft: 50,
    paddingRight: 50,
  },
  aboutMe: {
    color: '#FFFFFF',
    fontFamily: 'Roboto, Arial',
    fontWeight: 100,
    paddingLeft: 50,
    paddingRight: 50,
  },
  navBarIcons: {
    height: navBarHeight,
    width: '32%',
    backgroundColor: '#FFFFFF',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10vw',
  }
}));