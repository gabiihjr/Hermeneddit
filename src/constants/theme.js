import { createTheme } from '@material-ui/core/styles';
import { mainColor, secondColor } from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: mainColor,
    },
    text: {
      primary: secondColor,
    },
  },
});

export default theme;