import type { NextPage } from "next";
import Router from "next/router";
import { Button, Box, TextField, Container } from "@mui/material";

const idSuccess = () => {
  Router.push("/find/informid")
}

const findId : NextPage = () => {
  return (
    <Container id="findIdForm" className="findIdForm" maxWidth="xs">
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
            <TextField id="userName" label="성명" variant="outlined" />
          </h2>
          <h2>
            <TextField id="userNumber" label="학번/사번" variant="outlined" />
          </h2>
          <Button variant="contained" onClick={idSuccess}>확인</Button>
        </div>
      </Box>
    </Container>
  )
}
export default findId;