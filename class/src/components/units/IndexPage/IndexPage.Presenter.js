import { IndexPage__Container, IndexPage__Header, IndexPage__LoginButton, IndexPage__Section, IndexPage__Section__Text } from "./IndexPage.Styles";

export default function IndexPageUI(props){

    return(
        <IndexPage__Container>
            <IndexPage__Header>
                <img src="/Image/Logo.png"/>
            </IndexPage__Header>
            <IndexPage__Section>
                <IndexPage__Section__Text>
                    고루캘린더와 함께<br></br>
                    협업이 더 <span style={{color:"#1F3A93"}}>간편</span>해 집니다.<br></br>
                    <span style={{color:"#1F3A93"}}>계획</span>부터 <span style={{color:"#1F3A93"}}>실행</span>까지<br></br>
                    모든 것이 한 눈에
                    </IndexPage__Section__Text>
                <div style={{height:"40px"}}></div>
                <IndexPage__LoginButton
                    onClick={() => {props.onClickHome();}}
                >시작하기 &gt;</IndexPage__LoginButton>
            </IndexPage__Section>
        </IndexPage__Container>
    )
}