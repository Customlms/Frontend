import Button from '@mui/material/Button';

const findId = () => {
    return (

        <div>
            <h2>님의 ID는 입니다.</h2>
            <Button href="/logIn">로그인</Button>
            <Button href="/findAccount">비밀번호 찾기</Button>
        </div>
    )
}

export default findId;