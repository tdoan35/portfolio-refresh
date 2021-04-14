import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  heroBox: {
    height: 845,
    width: '68%',
    backgroundColor: '#5B5B5B',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
  },
  whiteBox: {
    height: 845,
    width: '32%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  heroText: {
    color: 'white',
    whiteSpace: 'nowrap',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'absolute',
    width: 'auto',
    fontWeight: 500,
    marginRight: 525
  },
  cube: {
    position: 'absolute',
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  }
}));