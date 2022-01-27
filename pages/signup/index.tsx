import * as React from 'react';
import {
    FormControl,
    Input,
    InputLabel,
    FormHelperText,
    Container,
    Button,
    Grid,
    List,
    ListItem,
    MenuItem,
    Menu,
    Box
} from "@mui/material";
import { textAlign } from '@mui/system';

const emailOptions = [
    'Selected Email',
    'naver.com',
    'daum.net',
    'gmail.com',
];

const signup = () => {
    const [anchorEL, setAnchorEL] = React.useState<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const open = Boolean(anchorEL);
    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEL(event.currentTarget);
    }
    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLElement>,
        index: number,
    ) => {
        setSelectedIndex(index);
        setAnchorEL(null);
    }

    const handleClose = () => {
        setAnchorEL(null);
    }

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <Container id="signUpForm" className="signUpForm" maxWidth="sm">

                <Grid container spacing={10}>
                    <Grid item xs={8}>
                        <FormControl variant="outlined" margin="normal" fullWidth>
                            <InputLabel htmlFor="id">아이디</InputLabel>
                            <Input id="id" aria-describedby="idHelperText" />
                            <FormHelperText id="idHelperText"></FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined" sx={{ mt: 3 }}>중복확인</Button>
                    </Grid>
                </Grid>

                <FormControl variant="outlined" margin="normal" fullWidth>
                    <InputLabel htmlFor="password">비밀번호</InputLabel>
                    <Input id="password" type="password" aria-describedby="passwordHelperText" />
                    <FormHelperText id="passwordHelperText"></FormHelperText>
                </FormControl>

                <FormControl variant="outlined" margin="normal" fullWidth>
                    <InputLabel htmlFor="passwordCheck">비밀번호 확인</InputLabel>
                    <Input id="passwordCheck" type="password" aria-describedby="passwordCheckHelperText" />
                    <FormHelperText id="passwordCheckHelperText"></FormHelperText>
                </FormControl>

                <Grid container spacing={10}>
                    <Grid item xs={4}>
                        <FormControl variant="outlined" margin="normal" fullWidth>
                            <InputLabel htmlFor="email">이메일</InputLabel>
                            <Input id="email" aria-describedby="emailHelperText" />
                            <FormHelperText id="emailHelperText"></FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={1} sx={{ mt: 3 }}>
                        <span>@</span>
                    </Grid>
                    <Grid item xs={3}>
                        <List
                            component="nav"
                            aria-label="Selected Email"
                            sx={{ bgcolor: 'background.paper' }}
                        >
                            <ListItem button id="emailOptionsButton"
                                aria-haspopup="listbox"
                                aria-controls="emailOptionMenu"
                                aria-label="Selected Email"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClickListItem}>
                                {emailOptions[selectedIndex]}
                            </ListItem>
                        </List>
                        <Menu
                            id="emailOptionMenu"
                            anchorEl={anchorEL}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{ 'aria-labelledby': 'emailOptionsButton', 'role': 'listbox' }}>
                            {emailOptions.map((option, index) => (
                                <MenuItem
                                    key={option}
                                    disabled={index === 0}
                                    selected={index === selectedIndex}
                                    onClick={(event) => handleMenuItemClick(event, index)}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained">이메일 확인</Button>
                    </Grid>

                </Grid>

                <Grid container>
                    <Button variant="contained" sx={{ mt: 3, margin: "0 auto" }}>가입하기</Button>
                </Grid>




            </Container >
        </Box>
    )
}

export default signup;