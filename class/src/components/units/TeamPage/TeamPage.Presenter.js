import CreateModalLogic from "@/components/commons/CreateModal/CreateModal.Container";
import { TeamPage__Button, TeamPage__Container, TeamPage__DatePicker, TeamPage__DatePickerWrapper, TeamPage__Header, TeamPage__Header__Left__Menu, TeamPage__Header__Right__User, TeamPage__Header_Left, TeamPage__Header_Right, TeamPage__Input, TeamPage__PersonalSchedule__BottomMenu__Container, TeamPage__PersonalSchedule__BottomMenu__Menu, TeamPage__PersonalSchedule__Container, TeamPage__Section, TeamPage__Section__PersonalSchedule__Container, TeamPage__Section__PersonalSchedule__Header, TeamPage__Section__PersonalSchedule__Left, TeamPage__Section__PersonalSchedule__Left__Describe, TeamPage__Section__PersonalSchedule__Left__Describe__Name, TeamPage__Section__PersonalSchedule__Left__Describe__Role, TeamPage__Section__PersonalSchedule__Left__Img, TeamPage__Section__PersonalSchedule__Section, TeamPage__Section__PersonalSchedule__Section__TeamSc, TeamPage__Section__PersonalSchedule__Section_detailSc, TeamPage__Section__PersonalSchedule__Wrapper, TeamPage__Section__TeamSchedule__Button, TeamPage__Section__TeamSchedule__Container, TeamPage__Section__TeamSchedule__Container__NS, TeamPage__Section__TeamSchedule__Describe, TeamPage__Section__TeamSchedule__Describe__Date, TeamPage__Section__TeamSchedule__Left, TeamPage__Section__TeamSchedule__Wrapper, TeamPage__Section__Title, TeamPage__SubmitButton, TeamPage__Wrapper } from "./TeamPage.Styles";
import SideMenuLogic from "@/components/commons/SideMenu/SideMenu.Container";
import { MenuIcon, ScheduleIcon, UserIcon, VerticalDots } from "@/utils/SvgProvider";
import { useState } from "react";
import BottomMenuLogic from "@/components/commons/BottomMenu/BottomMenu.Container";
import DatePicker from "react-datepicker";


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
    //세부 일정 관리 메뉴
    const [isDBEOpen, setIsDBEOpen] = useState(false);
    //세부 일정 수정 모달
    const [isDBEModalOpen,setIsDBEModalOpen] = useState(false);

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
                        props.onDeleteTeamSchedule();
                    }}
                >
                    팀 일정 삭제
                </TeamPage__PersonalSchedule__BottomMenu__Menu>
                <TeamPage__PersonalSchedule__BottomMenu__Menu
                    onClick={() => {
                        setIsDBMOpen(false);
                        setIsDSModalOpen(true);
                    }}
                >
                    세부 일정 생성
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
            <TeamPage__DatePickerWrapper>
                <DatePicker
                placeholderText="시작 날짜"
                onChange={(date) => props.onChangeStartDate(date)}
                selected={props.startDate}
                dateFormat="yyyy-MM-dd"
            >
                </DatePicker>
            </TeamPage__DatePickerWrapper>
            <TeamPage__DatePickerWrapper>
                <DatePicker
                    placeholderText="종료 날짜"
                    onChange={(date) => props.onChangeEndDate(date)}
                    selected={props.endDate}
                    dateFormat="yyyy-MM-dd"
                >
                </DatePicker>
            </TeamPage__DatePickerWrapper>
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
                생성하기
            </TeamPage__SubmitButton>
        </CreateModalLogic>
        {/* 세부 일정 관리 모달 */}
        <BottomMenuLogic
                setIsModalOpen={setIsDBEOpen}
                isModalOpen={isDBEOpen}
            >
                <TeamPage__PersonalSchedule__BottomMenu__Container>
                    <TeamPage__PersonalSchedule__BottomMenu__Menu
                        onClick={() => {
                            props.onDeletePersonalSchedule();
                            setIsDBEOpen(false);
                        }}
                    >
                        세부 일정 삭제
                    </TeamPage__PersonalSchedule__BottomMenu__Menu>
                    <TeamPage__PersonalSchedule__BottomMenu__Menu
                        onClick = {() => {
                            setIsDBEOpen(false);
                            setIsDBEModalOpen(true);
                        }}
                    >
                        세부 일정 수정
                    </TeamPage__PersonalSchedule__BottomMenu__Menu>            
                </TeamPage__PersonalSchedule__BottomMenu__Container>
        </BottomMenuLogic>
        {/* 세부 일정 수정 모달 */}
        <CreateModalLogic
            setIsModalOpen={setIsDBEModalOpen}
            isModalOpen={isDBEModalOpen}
        >
            <div>
                세부 일정 수정
            </div>
            <TeamPage__Input
                placeholder="변경할 일정 이름"
                onChange={props.onChangeChangedPName}
                value = {props.changedPName}
            >
            </TeamPage__Input>
            <select
                style={{
                    width:"100%",
                    border: "1px solid #d9d9d9",
                    borderRadius: "4px",
                    padding: "5px 12px",
                    fontSize: "14px",
                    lineHeight: "20px"
                }}
                onChange={props.onChangeChangedPState}
            >
                <option value="미완료">미완료</option>
                <option value="진행중">진행중</option>
                <option value="완료">완료</option>
            </select>
            <TeamPage__SubmitButton
                onClick={() => {props.onUpdatePersonalSchedule()}}
            >
                변경하기
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
                    <TeamPage__Header__Right__User
                        onClick={() => {
                            props.onDeleteTeam();
                        }}
                    ><VerticalDots></VerticalDots></TeamPage__Header__Right__User>
                </TeamPage__Header_Right>
            </TeamPage__Header>
            <TeamPage__Section>
                <TeamPage__Section__Title>팀 일정</TeamPage__Section__Title>
                <TeamPage__Section__TeamSchedule__Wrapper>
                    {(props.teamScheduleArr?.length ===0)?
                    // 팀 일정이 없는 경우
                    <TeamPage__Section__TeamSchedule__Container__NS>팀 일정이 없습니다.
                    </TeamPage__Section__TeamSchedule__Container__NS>
                    :
                    props.teamScheduleArr?.map((data,index) => (
                    <TeamPage__Section__TeamSchedule__Container>
                        <TeamPage__Section__TeamSchedule__Left>
                            <TeamPage__Section__PersonalSchedule__Left__Img
                                profileImage = {"/Image/default-schedule.png"}
                            ></TeamPage__Section__PersonalSchedule__Left__Img>
                            <TeamPage__Section__TeamSchedule__Describe>
                                <div>{data.schedule_name}</div>
                                <TeamPage__Section__TeamSchedule__Describe__Date><ScheduleIcon></ScheduleIcon> {data.start_date} - {data.end_date}</TeamPage__Section__TeamSchedule__Describe__Date>
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
                    <TeamPage__Section__TeamSchedule__Button
                        onClick={() => {
                            setIsCSModalOpen(true);
                        }}
                        >
                        새 일정 생성하기
                    </TeamPage__Section__TeamSchedule__Button>
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
                                        const groupedSchedule = curMemArr?.reduce((acc, item) => {
                                            const existingGroup = acc.find(group => group.team_schedule_id === item.team_schedule_id);

                                            if(existingGroup){
                                                existingGroup.details.push({
                                                    personal_schedule_id: item.personal_schedule_id,
                                                    detail_name:item.detail_name,
                                                    detail_status:item.detail_status,
                                                    sort_order:item.sort_order
                                                })
                                            }else{
                                                acc.push({
                                                    team_schedule_id: item.team_schedule_id,
                                                    team_schedule_name: item.team_schedule_name,
                                                    team_start_date: item.team_start_date,
                                                    team_end_date: item.team_end_date,
                                                    team_status: item.team_status,
                                                    team_id: item.team_id,
                                                    team_name: item.team_name,
                                                    position: item.position,
                                                    role: item.role,
                                                    assignee_name: item.assignee_name,
                                                    assignee_id: item.assignee_id,
                                                    team_member_id: item.team_member_id,
                                                    created_at:item.created_at,
                                                    details: [{
                                                        personal_schedule_id: item.personal_schedule_id,
                                                        detail_name: item.detail_name,
                                                        detail_status: item.detail_status,
                                                        sort_order: item.sort_order
                                                    }]
                                                })
                                            }

                                            return acc;
                                        },[])

                                    return(
                                        groupedSchedule.map((data,index)=>(
                                            <>
                                            <TeamPage__Section__PersonalSchedule__Section__TeamSc>
                                                {data.team_schedule_name}
                                                <TeamPage__Section__TeamSchedule__Describe__Date>
                                                    <ScheduleIcon></ScheduleIcon> {data.team_start_date} - {data.team_end_date}
                                                </TeamPage__Section__TeamSchedule__Describe__Date>
                                            </TeamPage__Section__PersonalSchedule__Section__TeamSc>                                            
                                            {data.details.map((d,i) => (
                                                <TeamPage__Section__PersonalSchedule__Section_detailSc>
                                                    <>• {d.detail_name} ({d.detail_status})</>
                                                {(data.assignee_id === props.userId)&& <TeamPage__Header__Left__Menu
                                                    onClick={() =>{
                                                        props.setPersonalId(d.personal_schedule_id);
                                                        props.setChangedPName(d.detail_name);
                                                        setIsDBEOpen(true);
                                                    }}
                                                ><VerticalDots></VerticalDots></TeamPage__Header__Left__Menu>}
                                                </TeamPage__Section__PersonalSchedule__Section_detailSc>                                                                                        ))}
                                            </>
                                        ))
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