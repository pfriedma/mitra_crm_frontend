import red from '@material-ui/core/colors/red';
import lightGreen from '@material-ui/core/colors/lightGreen'
import { createMuiTheme } from '@material-ui/core/styles';
import 'typeface-roboto'
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333333',
      contrastText: '#EEEEEE'
    },
    secondary: {
      main: '#222222',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#EEEEEE',
    },
  },
});

export default theme;