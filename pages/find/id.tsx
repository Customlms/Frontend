import Button from '@mui/material/Button';

const findId = () => {
    return (

        <div id='findId' className='findId'>
            <h2>님의 ID는 입니다.</h2>
            <Button href="/login">로그인</Button>
            <Button href="/find/passwd">비밀번호 찾기</Button>
        </div>
    )
}

export default findId;