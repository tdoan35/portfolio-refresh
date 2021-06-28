import { makeStyles } from '@material-ui/core';

const referralHeight = 400;

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  referralBlock: {
    height: referralHeight,
    width: '100%',
    backgroundColor: '#B1B1B1',
    display: 'flex',
  },
}));