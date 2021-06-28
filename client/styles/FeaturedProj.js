import { makeStyles } from '@material-ui/core/styles';

const featuredHeight = 450;
const offset = 40;
const projectBackground = '#424242';

export default makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
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
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  featuredText: {
    width: 420,
    marginRight: 100,
  },
  featuredImgBlock: {
    width: 500,
    height: 350,
    backgroundColor: projectBackground,
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureBreakBlock: {
    height: featuredHeight,
    width: '100%',
    backgroundColor: 'gray',
    display: 'flex',
  },
  bigRightCube: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    top: 1400 - offset,
    right: '12%',
    zIndex: 1,
  },
  medRightRightCube: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    top: 1550 - offset,
    right: '26%',
    zIndex: 2,
  },
  medRightTopCube: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    top: 1495 - offset,
    right: '33%',
    zIndex: 1,
  },
  medLeftRightCube: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    top: 1550 - offset,
    right: '40%',
    zIndex: 1,
  },
  medLeftTopCube: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    top: 1495 - offset,
    right: '47%',
    zIndex: 1,
  },
  smallRightRightCube: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    top: 1495 - offset,
    right: '55%',
    zIndex: 1,
  },
  smallRightMidCube: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    top: 1540 - offset,
    right: '60%',
    zIndex: 1,
  },
}));