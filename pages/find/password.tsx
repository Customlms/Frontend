import type { NextPage } from "next";
import Router from "next/router";
import { Button, Box, TextField, Container } from "@mui/material";

const pwSuccess = () => {
    Router.push("/find/informpw")
  }

  const findPassword: NextPage = () => {
    return (
      <Container id="findPasswordForm" className="findPasswordForm" maxWidth="xs">
  <Box
  sx={{
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}
>
  <div id="findPw" className ="findPw">
    <h1>Find Password</h1>
    <h2>
      <TextField id="userId" label="ID" variant="outlined" />
    </h2>
    <h2>
      <TextField id="userEmail" label="e-mail" variant="outlined" />
    </h2>
    <Button variant="contained" onClick={pwSuccess}>확인</Button>
  </div>
</Box>
</Container>
)
}

export default findPassword;