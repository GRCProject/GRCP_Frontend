import { LoginPage__Container,LoginPage__Container__Button,LoginPage__Container__ErrorMsg,LoginPage__Container__Input,LoginPage__Container__Subtitle,LoginPage__Wrapper } from "./LoginPage.Styles";

export default function LoginPageUI(props){

    return(
    <LoginPage__Wrapper>
        <img src="/Image/Logo.png"></img>
        <LoginPage__Container>
            <LoginPage__Container__Subtitle>아이디</LoginPage__Container__Subtitle>
            <LoginPage__Container__Input
                onChange={props.onChangeId}
            ></LoginPage__Container__Input>
            <LoginPage__Container__Subtitle>비밀번호</LoginPage__Container__Subtitle>
            <LoginPage__Container__Input
                onChange={props.onChangePassword}
            ></LoginPage__Container__Input>
            {props.error &&
            <LoginPage__Container__ErrorMsg>
                {props.error}
            </LoginPage__Container__ErrorMsg>}
            <LoginPage__Container__Button
                onClick={() => {props.onClickSubmit()}}
                style={{backgroundColor:"#1f883d", marginTop:"10px"}}
            >로그인</LoginPage__Container__Button>
            <LoginPage__Container__Button
                onClick={() => {props.onClickRegister()}}
                style={{color:"black", border:"1px solid #d9d9d9"}}
            >회원가입</LoginPage__Container__Button>
        </LoginPage__Container>
    </LoginPage__Wrapper>
)
}