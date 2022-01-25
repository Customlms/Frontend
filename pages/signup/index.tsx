import {
    FormControl,
    Input,
    InputLabel,
    FormHelperText,
    Container,
    Button
} from "@mui/material"

const signup = () => {
    return (
        <Container id="signUpForm" className="signUpForm" maxWidth="md">
            <FormControl variant="outlined" margin="normal" fullWidth>
                <InputLabel htmlFor="id">아이디</InputLabel>
                <Input id="id" aria-describedby="idHelperText" />
                <FormHelperText id="idHelperText"></FormHelperText>
            </FormControl>

            <FormControl variant="outlined" margin="normal" fullWidth>
                <InputLabel htmlFor="password">비밀번호</InputLabel>
                <Input id="password" aria-describedby="passwordHelperText" />
                <FormHelperText id="passwordHelperText"></FormHelperText>
            </FormControl>

            <FormControl variant="outlined" margin="normal" fullWidth>
                <InputLabel htmlFor="passwordCheck">비밀번호 확인</InputLabel>
                <Input id="passwordCheck" aria-describedby="passwordCheckHelperText" />
                <FormHelperText id="passwordCheckHelperText"></FormHelperText>
            </FormControl>

            <FormControl variant="outlined" margin="normal" fullWidth>
                <InputLabel htmlFor="email">이메일</InputLabel>
                <Input id="email" aria-describedby="emailHelperText" />
                <FormHelperText id="emailHelperText"></FormHelperText>
                <Button variant="contained">이메일 확인</Button>
            </FormControl>
            
            <Button variant="contained">가입하기</Button>

            
        </Container>
    )
}

export default signup;