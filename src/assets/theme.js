import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#E68D63'
        },
        secondary: {
            main: '#EEBD4C'
        },
        error: {
            main: red.A400
        },
    },
});

export default theme;
