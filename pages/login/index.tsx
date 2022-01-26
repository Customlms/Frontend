import { NextPage } from "next";
import { Grid, Button, Container, TextField, Box } from "@mui/material";

const login: NextPage = () => {
    return (
        <Container id="loginForm" className="loginForm" maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 20
                }}
            >
                <h1>Login 화면</h1>
                <TextField
                    label="ID"
                    name="ID"
                    required
                    fullWidth
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Password"
                    name="Password"
                    type="password" 
                    required
                    fullWidth
                    sx={{ mb: 2 }}
                />
                <Button
                    id="loginButton"
                    variant="contained"
                    type = "submit"
                    href="/main"
                    fullWidth
                >Sign In</Button>
                <Grid container>
                    <Grid item xs>
                        <Button className="test" href="/find-user">Sign Up</Button>
                    </Grid>
                    <Button className="test" href="/find">Find Account</Button>
                </Grid>
            </Box>
        </Container>
    )
}

export default login;
