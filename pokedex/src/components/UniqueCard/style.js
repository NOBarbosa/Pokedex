import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';

export default makeStyles((theme) => ({
  root: {
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color(`gray`)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  },
  media: {
    height: 'auto',
    paddingTop: '65.25%', // 16:9
    paddingBottom: '30.25%',
  },
  typograph: {
    paddingTop: 5,
    width: 10,
    marginTop: 45,
    borderRadius: '1rem',
    padding: '0.2rem 0.4rem',
    backgroundColor: '#ffffff4d',
  },
}));
