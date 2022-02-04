import Button from '@mui/material/Button';

const informId= () => {
    return (

        <div id='idAlert' className='idAlert'>
            <h2>님의 ID는 입니다.</h2>
            <Button href="/login">로그인</Button>
            <Button href="/find/password">비밀번호 찾기</Button>
        </div>
    )
}

export default informId;