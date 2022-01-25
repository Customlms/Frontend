import * as React from 'react';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Input,
  InputLabel,
  Grid,
  Container,
  Box,
  ButtonGroup
} from '@mui/material';

const signUp = () => {
  return (
    <Container id='signUpForm' className='signUpForm' component="main" maxWidth="md">
      <Box sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <FormGroup>
          <Grid container spacing={7}>
            <Grid item xs>
              <FormControlLabel control={<Checkbox />} label="교수" />
            </Grid>
            <Grid item xs>
              <FormControlLabel control={<Checkbox />} label="직원" />
            </Grid>
            <Grid item xs>
              <FormControlLabel control={<Checkbox />} label="조교" />
            </Grid>
            <Grid item xs>
              <FormControlLabel control={<Checkbox />} label="학부" />
            </Grid>
            <Grid item xs>
              <FormControlLabel control={<Checkbox />} label="대학원" />
            </Grid>
          </Grid>

          <FormControl variant="outlined" margin="normal">
            <InputLabel htmlFor="name">성명(한글)</InputLabel>
            <Input id="name" aria-describedby="nameHelperText" />
            <FormHelperText id="nameHelperText"></FormHelperText>
          </FormControl>

          <FormControl variant="outlined" margin="normal">
            <InputLabel htmlFor="birthDate">생년월일(6자리)</InputLabel>
            <Input id="birthDate" aria-describedby="birthDateHelperText" />
            <FormHelperText id="birthDateHelperText"></FormHelperText>
          </FormControl>

          <FormControl variant="outlined" margin="normal">
            <InputLabel htmlFor="admissionYear">입사/입학년도(4자리)</InputLabel>
            <Input id="admissionYear" aria-describedby="admissionYearHelperText" />
            <FormHelperText id="admissionYearHelperText"></FormHelperText>
          </FormControl>

          <FormControl variant="outlined" margin="normal">
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <InputLabel htmlFor="idNumber">교직원번호/학번</InputLabel>
                <Input id="idNumber" aria-describedby="idNumberHelperText" />
                <FormHelperText id="idNumberHelperText"></FormHelperText>
              </Grid>
              <Grid item xs={4}>
                <Button href="/signup" variant="outlined">학번조회</Button>
              </Grid>
              <ButtonGroup variant="contained" sx={{ mt: 3 }}>
                <Button >확인</Button>
                <Button >취소</Button>
              </ButtonGroup>
            </Grid>
          </FormControl>
        </FormGroup>
      </Box>
    </Container>
  )
}

export default signUp;