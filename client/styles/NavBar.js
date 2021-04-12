import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  navBar: {
    height: 125,
    width: '68%',
    backgroundColor: '#707070',
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
    height: 60,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'gray',
      borderRadius: 5
    },
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
    height: 125,
    width: '32%',
    backgroundColor: '#FFFFFF',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10vw',
  }
}));