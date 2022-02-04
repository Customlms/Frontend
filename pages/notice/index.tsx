import * as React from 'react';
import { Typography, Button, TextField, FormControl, Grid, Link } from "@mui/material";
import { Container, Box } from "@mui/material";
import { Select, MenuItem } from "@mui/material"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Router from "next/router";


const noticeClick = () => {
    Router.push("/#");
}

function createData(
    number: number,
    title: string,
    writer: string,
    date: number) {
    return { number, title, writer, date };
}

const rows = [
    createData(5, '5번째 테스트 글', '관리자', 20220128),
    createData(4, '4번째 테스트 글', '너구리', 20210620),
    createData(3, '3번째 테스트 글', '석삼', 20200717),
    createData(2, '2번째 테스트 글', '두식이', 20200508),
    createData(1, '1번째 테스트 글', '한놈', 20200128),
];

export default function notice() {

    const [name, setName] = React.useState(''); //text값을 '' 공백으로 처리

    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setName(e.target.value);
    };

    return (
        <Container>
            <Container maxWidth="md">
                <Box
                    sx={{
                        mb: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                    <Typography component="h1" variant="h3">Notice</Typography>
                    <TextField id="searchNotice" variant="outlined" placeholder="search" fullWidth></TextField>
                </Box>
                <Box>
                    <FormControl // 제목 작성자 select form
                        size="small"
                        sx={{
                            width: 1 / 9,
                            mb: 3,
                            mr: 83 // 수정 필요
                        }}>
                        <Select
                            id='selectType'
                            defaultValue={'title'} // Value 설정 시 select가 안됨
                            onChange={handleChange}
                        >
                            <MenuItem value="title">제목</MenuItem>
                            <MenuItem value="writer">작성자</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="contained">Search</Button>
                </Box>
            </Container>
            
            <TableContainer>
                <Table sx={{ border: 1 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>번호</TableCell>
                            <TableCell align="center">제목</TableCell>
                            <TableCell align="center">작성자</TableCell>
                            <TableCell align="center">날짜</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.number}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.number}
                                </TableCell>
                                <TableCell align="center" onClick={noticeClick}>
                                    <Link>{row.title}</Link></TableCell>
                                <TableCell align="center">{row.writer}</TableCell>
                                <TableCell align="center">{row.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid container>
                <Grid item xs>
            </Grid>
                <Grid item marginTop={2}>
                <Button id = "writing" href = "/notice/writing">글쓰기</Button>
                </Grid>
            </Grid>
        </Container>
    )
}