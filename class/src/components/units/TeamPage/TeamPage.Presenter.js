import CreateModalLogic from "@/components/commons/CreateModal/CreateModal.Container";
import { TeamPage__Button, TeamPage__Container, TeamPage__Header, TeamPage__Header__Left__Menu, TeamPage__Header__Right__User, TeamPage__Header_Left, TeamPage__Header_Right, TeamPage__Input, TeamPage__PersonalSchedule__BottomMenu__Container, TeamPage__PersonalSchedule__BottomMenu__Menu, TeamPage__PersonalSchedule__Container, TeamPage__Section, TeamPage__Section__PersonalSchedule__Container, TeamPage__Section__PersonalSchedule__Header, TeamPage__Section__PersonalSchedule__Left, TeamPage__Section__PersonalSchedule__Left__Describe, TeamPage__Section__PersonalSchedule__Left__Describe__Name, TeamPage__Section__PersonalSchedule__Left__Describe__Role, TeamPage__Section__PersonalSchedule__Left__Img, TeamPage__Section__PersonalSchedule__Section, TeamPage__Section__PersonalSchedule__Wrapper, TeamPage__Section__TeamSchedule__Container, TeamPage__Section__TeamSchedule__Container__NS, TeamPage__Section__TeamSchedule__Describe, TeamPage__Section__TeamSchedule__Left, TeamPage__Section__TeamSchedule__Wrapper, TeamPage__Section__Title, TeamPage__SubmitButton, TeamPage__Wrapper } from "./TeamPage.Styles";
import SideMenuLogic from "@/components/commons/SideMenu/SideMenu.Container";
import { MenuIcon, UserIcon, VerticalDots } from "@/utils/SvgProvider";
import { useState } from "react";
import BottomMenuLogic from "@/components/commons/BottomMenu/BottomMenu.Container";

export default function TeamPageUI(props){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    //팀 일정 생성 모달
    const [isCSModalOpen,setIsCSModalOpen] = useState(false);
    //세부 일정 생성 모달
    const [isDSModalOpen, setIsDSModalOpen] = useState(false);
    //멤버 모달 열림 여부
    const [openMemberArr, setOpenMemberArr] = useState([]);
    //세부 일정 하단 메뉴
    const [isDBMOpen, setIsDBMOpen] = useState(false);

    const onClickMember = (id) => {
        if(!openMemberArr.includes(id)){
            setOpenMemberArr(prev =>[...prev,id]);
        }else{
            const newArr = openMemberArr.filter((data) => data !== id);
            setOpenMemberArr(newArr);
        }
    }
    return(
    <>
    <TeamPage__Wrapper>
        {/* 팀원 일정 하단 메뉴 모달 */}
        <BottomMenuLogic
            setIsModalOpen={setIsDBMOpen}
            isModalOpen={isDBMOpen}
        >
            <TeamPage__PersonalSchedule__BottomMenu__Container>
                <TeamPage__PersonalSchedule__BottomMenu__Menu
                    onClick={() => {
                        setIsDBMOpen(false);
                        setIsDSModalOpen(true);
                    }}
                >
                    세부 일정 생성
                </TeamPage__PersonalSchedule__BottomMenu__Menu>
                <TeamPage__PersonalSchedule__BottomMenu__Menu>
                    세부 일정 수정
                </TeamPage__PersonalSchedule__BottomMenu__Menu>
                <TeamPage__PersonalSchedule__BottomMenu__Menu>
                    세부 일정 삭제
                </TeamPage__PersonalSchedule__BottomMenu__Menu>
            </TeamPage__PersonalSchedule__BottomMenu__Container>
        </BottomMenuLogic>
        {/* 팀 일정 생성 모달 */}
        <CreateModalLogic
            setIsModalOpen={setIsCSModalOpen}
            isModalOpen={isCSModalOpen}
        >
            <div>일정 생성</div>
            <TeamPage__Input
                placeholder="일정 이름"
                onChange={props.onChangeScheduleName}
                value={props.scheduleName}
            ></TeamPage__Input>
            <TeamPage__Input
                placeholder="시작 날짜 (YYYY-MM-DD)"
                onChange={props.onChangeStartDate}
                value={props.startDate}
            ></TeamPage__Input>
            <TeamPage__Input
                placeholder="종료 날짜 (YYYY-MM-DD)"
                onChange={props.onChangeEndDate}
                value={props.endDate}
            ></TeamPage__Input>
            <TeamPage__SubmitButton
                onClick={() => {
                    props.onCreateTeamSchedule();
                    setIsCSModalOpen(false);
                }}
            >
                일정 등록
            </TeamPage__SubmitButton>
        </CreateModalLogic>
        {/* 세부 일정 생성 모달 */}
        <CreateModalLogic
            setIsModalOpen={setIsDSModalOpen}
            isModalOpen={isDSModalOpen}
        >
                <div>세부 일정 생성</div>
                <div>{props.curSchedule}</div>
            <TeamPage__Input
                placeholder="일정 이름"
                onChange={props.onChangeDSName}
                value={props.DSName}
            ></TeamPage__Input>
            <TeamPage__SubmitButton
                onClick={() => {
                    props.onCreatePersonalSchedule();
                    setIsDSModalOpen(false);
                }}
            >
                세부 일정 생성
            </TeamPage__SubmitButton>
        </CreateModalLogic>
        <SideMenuLogic 
                isMenuOpen = {isMenuOpen} 
                setIsMenuOpen = {setIsMenuOpen}
        ></SideMenuLogic>
        <TeamPage__Container>
            <TeamPage__Header>
                <TeamPage__Header_Left>
                    <TeamPage__Header__Left__Menu
                        onClick={() => {
                            isMenuOpen?setIsMenuOpen(false):setIsMenuOpen(true);
                        }}
                    >
                        <MenuIcon></MenuIcon>
                    </TeamPage__Header__Left__Menu>
                    <img src = "/Image/Logo.png" alt="Logo.png"/>
                </TeamPage__Header_Left>
                <TeamPage__Header_Right>
                    <TeamPage__Button
                    style={{width:"150px"}}
                    onClick={() => {
                        setIsCSModalOpen(true);
                    }}
                    >일정 생성</TeamPage__Button>
                    <TeamPage__Header__Right__User><UserIcon></UserIcon> </TeamPage__Header__Right__User>
                </TeamPage__Header_Right>
            </TeamPage__Header>
            <TeamPage__Section>
                <TeamPage__Section__Title>팀 일정</TeamPage__Section__Title>
                <TeamPage__Section__TeamSchedule__Wrapper>
                    {(props.teamScheduleArr?.length ===0)?
                    // 팀 일정이 없는 경우
                    <TeamPage__Section__TeamSchedule__Container__NS>팀 일정이 없습니다.
                        <TeamPage__Button
                        onClick={() => {
                            setIsCSModalOpen(true);
                        }}
                    >팀 일정 생성하기</TeamPage__Button> </TeamPage__Section__TeamSchedule__Container__NS>
                    :
                    props.teamScheduleArr?.map((data,index) => (
                    <TeamPage__Section__TeamSchedule__Container>
                        <TeamPage__Section__TeamSchedule__Left>
                            <TeamPage__Section__PersonalSchedule__Left__Img
                                profileImage = {"/Image/default-schedule.png"}
                            ></TeamPage__Section__PersonalSchedule__Left__Img>
                            <TeamPage__Section__TeamSchedule__Describe>
                                <div>{data.schedule_name}</div>
                                <div
                                    style={{color:"#767676"}}
                                >{data.start_date} ~ {data.end_date}</div>
                            </TeamPage__Section__TeamSchedule__Describe>
                        </TeamPage__Section__TeamSchedule__Left>
                        <TeamPage__Header__Left__Menu
                            onClick={() => {
                                setIsDBMOpen(true);
                                props.setCurSchedule(data.id);
                            }}
                        >
                            <VerticalDots></VerticalDots>
                        </TeamPage__Header__Left__Menu>
                    </TeamPage__Section__TeamSchedule__Container>
                ))}
                </TeamPage__Section__TeamSchedule__Wrapper>
                {props.teamScheduleArr?.length !== 0 &&
                <>
                <TeamPage__Section__Title>팀원 별 일정</TeamPage__Section__Title>
                <TeamPage__Section__PersonalSchedule__Wrapper>
                    {props.memberArr.map((data,index) =>(
                       <TeamPage__Section__PersonalSchedule__Container
                            onClick={() =>{
                                
                            }}
                       >
                        <TeamPage__Section__PersonalSchedule__Header
                            onClick={() => {onClickMember(data.id)}}
                        >
                        <TeamPage__Section__PersonalSchedule__Left>
                            <TeamPage__Section__PersonalSchedule__Left__Img
                                profileImage = {data.profile_image}
                            ></TeamPage__Section__PersonalSchedule__Left__Img>
                            <TeamPage__Section__PersonalSchedule__Left__Describe>
                                <TeamPage__Section__PersonalSchedule__Left__Describe__Name>
                                    {data.name}
                                </TeamPage__Section__PersonalSchedule__Left__Describe__Name>
                                <TeamPage__Section__PersonalSchedule__Left__Describe__Role>
                                    {data.role}
                                </TeamPage__Section__PersonalSchedule__Left__Describe__Role>
                            </TeamPage__Section__PersonalSchedule__Left__Describe>
                        </TeamPage__Section__PersonalSchedule__Left>
                        {(data.name === props.userName)&&
                            <TeamPage__Header__Left__Menu
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}   
                            >
                            <VerticalDots></VerticalDots>
                        </TeamPage__Header__Left__Menu>
                        }   
                        </TeamPage__Section__PersonalSchedule__Header>
                        {
                            (openMemberArr.includes(data.id))&&
                            <TeamPage__Section__PersonalSchedule__Section>
                                {
                                    (() => {
                                        const curMemArr = props.personalScheduleArr?.filter((e) => e.assignee_id === data.id);
                                    return(
                                        curMemArr.map((data,index)=>{

                                            return(
                                            <TeamPage__PersonalSchedule__Container>
                                                <div>{data.team_schedule_name}</div>
                                                <div>{data.detail_name}</div>
                                                <div>{data.detail_status}</div>
                                            </TeamPage__PersonalSchedule__Container>);
                                    })
                                    );
                                })()
                                }
                            </TeamPage__Section__PersonalSchedule__Section>
                        }
                       </TeamPage__Section__PersonalSchedule__Container>
                    ))}
                </TeamPage__Section__PersonalSchedule__Wrapper>
                </>
                }
            </TeamPage__Section>
        </TeamPage__Container>
    </TeamPage__Wrapper>
    </>)
}