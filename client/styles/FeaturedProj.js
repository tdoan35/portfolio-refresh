import { makeStyles } from '@material-ui/core/styles';

const featuredHeight = 450;

export default makeStyles((theme) => ({
  featuredBoxLeft: {
    height: featuredHeight,
    width: '60%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  featuredBoxRight: {
    height: featuredHeight,
    width: '40%',
  },
  featuredText: {
    
  },
}));