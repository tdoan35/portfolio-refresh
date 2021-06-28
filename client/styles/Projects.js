import { makeStyles } from '@material-ui/core/styles';

const projectHeight = 450;
const projectBackground = '#424242';

export default makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  projectBoxLeft: {
    height: projectHeight,
    width: '60%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  projectBoxRight: {
    height: projectHeight,
    width: '40%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  projectText: {
    width: 420,
    marginRight: 100,
  },
  projectImgBlock: {
    width: 500,
    height: 350,
    backgroundColor: projectBackground,
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  prevWork: {
    width: '100%',
    height: 50,
    paddingBottom: 20,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));