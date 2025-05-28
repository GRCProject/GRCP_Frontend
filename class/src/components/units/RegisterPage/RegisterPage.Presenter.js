import { RegisterPage__Container, RegisterPage__Container__Button, RegisterPage__Container__ErrorMsg, RegisterPage__Container__Input, RegisterPage__Container__Subtitle, RegisterPage__Wrapper } from "./RegisterPage.Styles";

export default function RegisterPageUI(props){

    return(
        <RegisterPage__Wrapper>
            <RegisterPage__Container>
                <img src="/Image/Logo.png"/>
                <RegisterPage__Container__Subtitle>아이디</RegisterPage__Container__Subtitle>
                <RegisterPage__Container__Input
                    onChange={props.onChangeUserId}
                ></RegisterPage__Container__Input>
                <RegisterPage__Container__Subtitle>비밀번호</RegisterPage__Container__Subtitle>
                <RegisterPage__Container__Input
                    onChange={props.onChangePassword}
                    type="password"
                ></RegisterPage__Container__Input>
                <RegisterPage__Container__Subtitle>비밀번호 확인</RegisterPage__Container__Subtitle>
                <RegisterPage__Container__Input
                    onChange={props.onChangeRePassword}
                    type="password"
                ></RegisterPage__Container__Input>
                <RegisterPage__Container__Subtitle>이름</RegisterPage__Container__Subtitle>
                <RegisterPage__Container__Input
                    onChange={props.onChangeName}
                ></RegisterPage__Container__Input>
                <RegisterPage__Container__Subtitle>이메일</RegisterPage__Container__Subtitle>
                <RegisterPage__Container__Input
                    placeholder="example@email.com"
                    onChange={props.onChangeEmail}
                ></RegisterPage__Container__Input>
                {props.error &&
                <RegisterPage__Container__ErrorMsg>{props.error}</RegisterPage__Container__ErrorMsg>}
                <RegisterPage__Container__Button
                    onClick={() => {props.onClickSubmit()}}
                >회원 가입</RegisterPage__Container__Button>
            </RegisterPage__Container>
        </RegisterPage__Wrapper>
    )
}