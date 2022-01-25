import { NextPage } from "next";
import { Button } from "@mui/material";

const Login: NextPage = () => {
    return (
        <div id="loginForm" className="loginForm">
            <h1>Login 화면</h1>
            <Button href="/find-user">signUp</Button>
        </div>
    )
}

export default Login;