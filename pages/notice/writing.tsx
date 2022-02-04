import * as React from 'react';
import {TextField, Box, Grid , Container, Button} from "@mui/material";

export default function writing() {

    return (
        <Container id = "writingForm">
        <h1>공지사항</h1>
        <Box sx = {{ mb : 1}}>
            <Grid container spacing = {1}>
                <Grid item xs = {1}>
                    <h3 id = "noticeTitle">제목</h3>
                </Grid>
                <Grid item xs = {11}>
                    <TextField fullWidth></TextField>
                </Grid>
            </Grid>
        </Box>
        <Box>
        <TextField 
        id = "noticeWriting" 
        variant = "outlined" 
        fullWidth 
        multiline rows={20}
        placeholder='글을 써도 업로드는 안 됩니다.'></TextField>
        </Box>
        <Grid container>
            <Grid item xs></Grid>
            <Box
            sx = {{
                mt : 1
            }}>
        <Button variant = "contained" type = "submit" href = "/notice">확인</Button>
        </Box>
        </Grid>
        </Container>
    )
}
