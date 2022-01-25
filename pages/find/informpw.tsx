import Button from '@mui/material/Button';

const informPw = () => {
    return (

        <div id='pwAlert' className='pwAlert'>
            <h2>님의 비밀번호는 입니다.</h2>
            <Button href="/login">로그인</Button>
        </div>
    )
}

export default informPw;