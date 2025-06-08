import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      //main: '#c6b6a1',
      main: '#3B7A57', 
    },
    secondary: {
      main: '#F5F1EB',
    },
    text: {
      primary: '#3B7A57', 
    },
  },
  typography: {
    fontFamily: '"Quicksand", serif',
  }
});

theme = responsiveFontSizes(theme);

export default theme;