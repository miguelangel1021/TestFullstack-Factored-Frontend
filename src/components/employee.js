import { useLocation, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Factored from '../images/FactoredImage.png'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import EmployeeCard from './employeeCard'
import ChartSkills from './chartSkills'

function Employee({onLogout}){

    const location = useLocation();
    const data = location.state?.data;
    console.log(data.email)
    

    return (<div>
            <AppBar position="static" style= {{backgroundColor :'#24cbd3'}}>
                <Toolbar style={{ justifyContent: 'space-between' }}>
                    <Grid container alignItems="center" spacing={2}> 
                        <Grid item>
                            <img src={Factored} alt="Factored icon" style={{ width: '150px' }} />
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">Profile</Typography>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" spacing={1} style={{ justifyContent: 'right' }}>
                        <Grid item>
                            <Button color="inherit">About</Button>
                        </Grid>
                        <Grid item>
                            <Button onClick = {onLogout} color="inherit" component={Link} to="/">Log Out</Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Box
                display="flex"
                alignItems="center"
                justifyContent= "center"
                height="90vh"
                bgcolor="#f5f5f5"
                >
                    <Container maxWidth="sm">
                        <EmployeeCard employee = {data} />
                    </Container>

                    <Container maxWidth="sm">
                        <Box
                            flexDirection="column"
                            bgcolor="white"
                            borderRadius="8px"
                            alignItems="center"
                            display="flex"
                            justifyContent= "center"
                            boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                            p={4}
                        >
                            <Typography variant="h5" component="div" mb = {2}>
                            Your Skills
                            </Typography>
                            <ChartSkills skills = {data.skills}/>
                        </Box>
                    </Container>
            </Box>
        </div>);
}

export default Employee;