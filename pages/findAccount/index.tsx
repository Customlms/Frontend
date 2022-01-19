import type { NextPage } from "next";
import Router from "next/router";
import { Button, Box, TextField, Container } from "@mui/material";

const findId = () => {
  Router.push("/findAccount/findId")
}

const findPw = () => {
  Router.push("/findAccount/findPw")
}

const findAccount: NextPage = () => {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div>
          <h1>Find ID</h1>
          <h2>
            <TextField id="name" label="성명" variant="outlined" />
          </h2>
          <h2>
            <TextField id="number" label="학번/사번" variant="outlined" />
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
        <div>
          <h1>Find Password</h1>
          <h2>
            <TextField id="id" label="ID" variant="outlined" />
          </h2>
          <h2>
            <TextField id="e-mail" label="e-mail" variant="outlined" />
          </h2>
          <Button variant="contained" onClick={findPw}>확인</Button>
        </div>
      </Box>
    </Container>
  );
};

export default findAccount;