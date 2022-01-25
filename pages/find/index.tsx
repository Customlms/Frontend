import type { NextPage } from "next";
import Router from "next/router";
import { Button, Box, TextField, Container } from "@mui/material";

const findId = () => {
  Router.push("/find/id")
}

const findPw = () => {
  Router.push("/find/passwd")
}

const findAccount: NextPage = () => {
  return (
    <Container id="accountFind" className="accountFind" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div id="findId" className ="findId">
          <h1>Find ID</h1>
          <h2>
            <TextField id="userName" label="성명" variant="outlined" />
          </h2>
          <h2>
            <TextField id="userNumber" label="학번/사번" variant="outlined" />
          </h2>
          <Button variant="contained" onClick={findId}>확인</Button>
        </div>
      </Box>
      <Box
        sx={{
          marginTop: 12,
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
          <Button variant="contained" onClick={findPw}>확인</Button>
        </div>
      </Box>
    </Container>
  );
};

export default findAccount;