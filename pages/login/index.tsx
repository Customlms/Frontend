import { NextPage } from "next";
import { Button } from "@mui/material";

const Login:NextPage = () => {
    return(
        <div>
        <h1>Login 화면</h1>
            <Button href = "/signup">signUp</Button>
        </div>

    )
}

export default Login;