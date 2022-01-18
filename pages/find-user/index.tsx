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
  Container
} from '@mui/material';
// const Register = () => {
//   const [checked, setChecked] = useState(false);
// }

// const handleAgree = (event) => {
//   setChecked(event.target.checked);
// }

const signUp = () => {
  return (
    <Container maxWidth="md">
      <div>
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
            <InputLabel htmlFor="my-input">성명(한글)</InputLabel>
            <Input id="Name" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text"></FormHelperText>
          </FormControl>

          <FormControl variant="outlined" margin="normal">
            <InputLabel htmlFor="my-input">생년월일(6자리)</InputLabel>
            <Input id="Name" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text"></FormHelperText>
          </FormControl>

          <FormControl variant="outlined" margin="normal">
            <InputLabel htmlFor="my-input">입사/입학년도(4자리)</InputLabel>
            <Input id="Name" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text"></FormHelperText>
          </FormControl>

          <FormControl variant="outlined" margin="normal">
            <Grid container spacing={2}>
              <Grid item xs>
                <InputLabel htmlFor="my-input">교직원번호/학번</InputLabel>
                <Input id="Name" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text"></FormHelperText>
              </Grid>
              <Grid item xs>
                <Button href = "/signup" variant = "outlined">학번조회</Button>
              </Grid>
            </Grid>
          </FormControl>


        </FormGroup>



      </div>
    </Container>
  )
}

export default signUp;