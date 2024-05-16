import Button  from "@mui/material/Button";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Grid from "@mui/material/Grid";
import Factored2 from '../images/Factored2.png';


function Login({ onLogin }){

    const navigate = useNavigate();

    const [login, setLogin] = useState({email: '', password: ''});
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [notFound, setNotFound] = useState('');
    
    const validateEmail = (email) => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email);
      };
    
      const validatePassword = (password) => {
        return 6 <= login.password.length
    };

    const updateEmail = (e) =>{
        setLogin({...login, email: e.target.value})

        
    };

    const updatePassword = (e) => {
        setLogin({...login, password: e.target.value})
    };

    const handleLogin = async () => {

        if (!validateEmail(login.email)){
            setEmailError('The email does not have a valid format.');
        } else {
            setEmailError('');
        }

        if (!validatePassword(login.password)){
            setPasswordError("The password must have at least 6 characters.");
        }else {
            setPasswordError('');
        }

        if (validateEmail(login.email)  && validatePassword(login.password)){
            try{
                const response = await fetch('http://localhost:5000/employees/login', 
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: login.email,
                            password: login.password
                        })
                    }
                );
                if (response.ok){
                    const data = await response.json();
                    setNotFound('');
                    onLogin();
                    navigate("/employee",{ state: { data: data } })
                }
                if (response.status === 404) {
                    setNotFound("The email or the password is incorrect, please validate it.");
                }
                
            }catch(error){
                console.error('Error in login:', error);
            }
        }
 
    }

    return (
        <Box
          display="flex"
          alignItems="center"
          justifyContent= "center"
          height="100vh"
          bgcolor="#f5f5f5"
        >
          <Container maxWidth="sm">
            <Box
              bgcolor="white"
              borderRadius="8px"
              boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
              p={4}
            >
                <Grid paddingBottom={2} sx={{ textAlign: 'Left', ml : 2 }}>
                    <img src = {Factored2} alt = "Factored icon" style={{ width: '200px'}}/>
                </Grid>
                <Grid paddingBottom={2} sx={{ textAlign: 'Left', ml : 3 }}>
                    <Typography variant="h5" component="h1" gutterBottom style={{ fontWeight: 'bold' }}>
                    Log in
                    </Typography>
                    <Typography  component="h1" gutterBottom style={{ fontSize: '20dp' }}>
                    {notFound}
                    </Typography>
                </Grid>
                <Grid container direction="column" spacing={2} alignItems="center">
                    <form onSubmit={handleLogin}>
                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <TextField
                        id="formBasicEmail"
                        label="Email"
                        type="email"
                        placeholder="Enter email"
                        value={login.email}
                        onChange={updateEmail}
                        error={Boolean(emailError)}
                        helperText={emailError}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <TextField
                        id="formBasicPassword"
                        label="Password"
                        type="password"
                        placeholder="Enter password"
                        value={login.password}
                        onChange={updatePassword}
                        error={Boolean(passwordError)}
                        helperText={passwordError}
                        />
                    </FormControl>
                    </form>
                    <Grid item xs={12} sx={{ textAlign: 'right' }}>
                        <Button on onClick={handleLogin} type="submit" variant="contained" sx={{ mt: 2 }} style = {{backgroundColor : '#24cbd3'}}>
                        Log In
                        </Button>
                    </Grid>
                </Grid>
            </Box>
          </Container>
        </Box>
      );

}

export default Login;
