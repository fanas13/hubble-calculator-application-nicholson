import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';

const Home = ({props}) => {
    return(
        <Grid
            container
            justifyContent="center" // Center horizontally
            alignItems="center"     // Center vertically
        >
            <Toolbar />
            <Grid
                md={7}
                sx={{ display: { xs: 'none', sm: 'block' } }}
                container
            >
                <Grid md={12} fullWidth>
                    content goes here
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Home;