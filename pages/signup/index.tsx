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
        <div>
            <Container maxWidth="md">
                <FormControl variant="outlined" margin="normal" fullWidth>
                    <InputLabel htmlFor="my-input">아이디</InputLabel>
                    <Input id="ID" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text"></FormHelperText>
                </FormControl>

                <FormControl variant="outlined" margin="normal" fullWidth>
                    <InputLabel htmlFor="my-input">비밀번호</InputLabel>
                    <Input id="Password" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text"></FormHelperText>
                </FormControl>

                <FormControl variant="outlined" margin="normal" fullWidth>
                    <InputLabel htmlFor="my-input">비밀번호 확인</InputLabel>
                    <Input id="Password" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text"></FormHelperText>
                </FormControl>

                <FormControl variant="outlined" margin="normal" fullWidth>
                    <InputLabel htmlFor="my-input">이메일</InputLabel>
                    <Input id="Email" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text"></FormHelperText>
                    
                    <Button>이메일 확인</Button>
                </FormControl>
            </Container>
        </div>
    )
}

export default signup;