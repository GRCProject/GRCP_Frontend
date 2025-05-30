import CreateModalLogic from "../CreateModal/CreateModal.Container"
import { SideMenu__Container, SideMenu__Plus, SideMenu__Subtitle, SideMenu__Team__Container, SideMenu__Title, SideMenu__Title__SB, SideMenu__Wrapper,SideMenu__Team__Element, SideMenu__Team__Member, SideMenu__Team__AddTeam, SideMenu__Team_Name,SideMenu__Team__Wrapper, SideMenu__Team__Schedule, SideMenu__Team__name__Text,SideMenu__CreateModal__Button,SideMenu__CreateModal__Input } from "./SideMenu.Styles"
import { PlusIcon,HomeIcon, VerticalDots, ScheduleIcon } from "@/utils/SvgProvider"
import { useState } from "react";

export default function SideMenuUI(props){
    const [isCTModalOpen, setIsCTModalOpen] = useState(false);
    const [isInvModalOpen,setIsInvModalOpen] = useState(false);

    return(
        <>
        {/* 팀 생성 모달 */}
        <CreateModalLogic
                        setIsModalOpen = {setIsCTModalOpen}
                        isModalOpen={isCTModalOpen}
        >
            <div>팀 생성</div>
            <SideMenu__CreateModal__Input
                onChange={props.onChangeTeamName}
                value={props.teamName}
                placeholder="팀 이름"
            ></SideMenu__CreateModal__Input>
            <SideMenu__CreateModal__Button
                onClick={() => {
                    props.onClickCreateTeam();
                    setIsCTModalOpen(false);
                    props.setTeamName("");
                }}
            >생성하기</SideMenu__CreateModal__Button>
        </CreateModalLogic>
        {/* 팀원 초대 모달 */}
        <CreateModalLogic
                        setIsModalOpen = {setIsInvModalOpen}
                        isModalOpen={isInvModalOpen}
        >
            <div>팀원 초대</div>
            <SideMenu__CreateModal__Input
                onChange={props.onChangeTeamEmail}
                value={props.teamEmail}
                placeholder="이메일을 입력해주세요."
            ></SideMenu__CreateModal__Input>
            <SideMenu__CreateModal__Button
                onClick={() => {
                    props.onClickInviteMember();
                    setIsInvModalOpen(false);
                    props.setTeamEmail("");
                }}
            >초대하기</SideMenu__CreateModal__Button>
        </CreateModalLogic>
        <SideMenu__Wrapper
                    onClick={() => {props.setIsMenuOpen(false)}}
                    isMenuOpen = {props.isMenuOpen}
                >
                    <SideMenu__Container
                        isMenuOpen = {props.isMenuOpen}
                        onClick={(e) => {e.stopPropagation()}}
                    >
                        <img src="/Image/Logo.png" width={"120px"}/>
                        <div style={{width:"1px", height:"40px"}}></div>
                    <SideMenu__Title
                        activeTab = {props.activeTabArr?.includes("home")}
                        onMouseOver={() => {
                            props.onClickTeamName("home");
                        }}
                        onMouseOut={() => {
                            props.onClickTeamName("home");
                        }}
                        onClick = {() => {
                            props.onClickHome();
                        }}
                    ><HomeIcon></HomeIcon> 홈</SideMenu__Title>
                    <SideMenu__Title__SB>
                        <div>팀</div>
                        <SideMenu__Plus
                            onClick={() => {
                                props.setIsMenuOpen(false);
                                setIsCTModalOpen(true);
                            }}
                        ><PlusIcon></PlusIcon></SideMenu__Plus>
                    </SideMenu__Title__SB>
                    <SideMenu__Team__Wrapper>
                        {props.teamArr?.map((data,index) => (
                        <SideMenu__Team__Container>
                        <SideMenu__Team_Name
                            onClick={() => {
                                props.onClickTeamName(data.id);
                            }}
                        >
                            <SideMenu__Team__name__Text>
                                {data.team_name}
                            </SideMenu__Team__name__Text> 
                            <SideMenu__Plus
                                onClick={(e) =>{
                                    e.stopPropagation();
                                }}
                            >
                                <VerticalDots></VerticalDots>
                            </SideMenu__Plus>
                        </SideMenu__Team_Name>
                        {props.activeTabArr.includes(data.id) && 
                        <SideMenu__Team__Element
                            activeTab = {props.activeTabArr.includes(data.id)}
                        >
                            <SideMenu__Team__Schedule
                                onClick={() => {props.onClickTeamSchedule(data.id)}}
                            >
                                <ScheduleIcon></ScheduleIcon> 일정
                            </SideMenu__Team__Schedule>
                            {data.member_names.map((data,index) => (
                                <SideMenu__Team__Member>
                                        {data}
                                        <SideMenu__Plus>
                                            <VerticalDots></VerticalDots>
                                        </SideMenu__Plus>
                                </SideMenu__Team__Member>
                                ))}
                                <SideMenu__Team__AddTeam
                                    onClick={() =>{
                                        props.setIsMenuOpen(false);
                                        setIsInvModalOpen(true);
                                        props.setTeamId(data.id);
                                    }}
                                >
                                    팀원 추가하기<PlusIcon color="#777777"></PlusIcon>
                                </SideMenu__Team__AddTeam>
                        </SideMenu__Team__Element>
                        }
                        </SideMenu__Team__Container>
                    ))}
                    </SideMenu__Team__Wrapper>      
                    </SideMenu__Container>
        </SideMenu__Wrapper>
        </>
    )
}