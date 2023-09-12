import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#33475b',
        }, 
        secondary: {
            main: '#ff4d56',
        },
        error: {
            main: '##ff4d56',
        }
    }
});

export default theme