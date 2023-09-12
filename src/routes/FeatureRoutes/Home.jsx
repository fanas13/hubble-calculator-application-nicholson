import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const Home = ({props}) => {
    const [expression, setExpression] = React.useState('');
    const [result, setResult] = React.useState('');

    const handleClick = (value) => {
        setExpression((prevExpression) => prevExpression + value);
    };
  
    const clearInput = () => {
        setExpression('');
        setResult('');
    };
  
    const calculateResult = () => {
        try {
            setResult(eval(expression));
        } catch (error) {
            setResult('Error');
        }
    };

    return(
        <Grid
            container
            justifyContent="center" // Center horizontally
            alignItems="center"     // Center vertically
        >
            <Toolbar />
            <Grid md={4} item sx={{ display: { xs: 'none', sm: 'block', marginTop: '25px' }}}>
                <Grid md={10} item style={{ padding: '40px', textAlign: 'center' }}>
                    <Paper elevation={1} style={{ padding: '26px', textAlign: 'center' }}>
                        <TextField
                            label="Expression"
                            variant="outlined"
                            type="number"
                            fullWidth
                            value={expression}
                            onChange={(e) => setExpression(e.target.value)}
                        />
                        <Grid container spacing={2} style={{ marginTop: '20px' }}>
                            <Grid item xs={3}>
                                <Button className="custom-hover-button" variant="contained" color="primary" onClick={() => handleClick('+')}>
                                    +
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained" color="primary" onClick={() => handleClick('-')}>
                                    -
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained" color="primary" onClick={() => handleClick('*')}>
                                    *
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained" color="primary" onClick={() => handleClick('/')}>
                                    /
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained" onClick={() => handleClick('1')}>
                                    1
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained" onClick={() => handleClick('2')}>
                                    2
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained" onClick={() => handleClick('3')}>
                                    3
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained" color="primary" onClick={() => handleClick('4')}>
                                    4
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained" onClick={() => handleClick('5')}>
                                    5
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained" onClick={() => handleClick('6')}>
                                    6
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained" onClick={() => handleClick('7')}>
                                    7
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained" onClick={() => handleClick('8')}>
                                    8
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained" onClick={() => handleClick('9')}>
                                    9
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained" color="primary" onClick={() => handleClick('0')}>
                                    0
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained" color="primary" onClick={() => handleClick('.')}>
                                    .
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained" color="primary" disabled={!expression ? true : false}onClick={calculateResult}>
                                    =
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth variant="contained" disabled={(!expression && !result )? true : false} onClick={clearInput}>
                                    Clear
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper elevation={1} style={{ padding: '40px', textAlign: 'center', marginTop: '40px' }}>
                        <Typography variant="h6">
                            Result: {result}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Home;