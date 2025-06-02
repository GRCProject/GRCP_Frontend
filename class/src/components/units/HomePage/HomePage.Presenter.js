import { BackIcon, MenuIcon, PlusIcon, ScheduleIcon, TeamIcon, UserIcon, VerticalDots } from "@/utils/SvgProvider";
import { HomePage__Container, HomePage__CreateModal__Button, HomePage__CreateModal__Input, HomePage__Header, HomePage__Header__Left__Menu, HomePage__Header__Right__CreateBtn, HomePage__Header__Right__User, HomePage__Header_Left, HomePage__Header_Right, HomePage__Menu__Container, HomePage__Menu__Subtitle, HomePage__Menu__Title, HomePage__Menu__Wrapper, HomePage__Section, HomePage__Section__Profile__Container, HomePage__Section__Profile__Content, HomePage__Section__Profile__ProfileImage, HomePage__Section__Profile__ProfileImageCover, HomePage__Section__Title, HomePage__Wrapper,HomePage__Section__Schedule__Container, HomePage__Section__Schedule__Header,HomePage__Section__Schedule__PS,HomePage__Section__Schedule__TS,HomePage__Section__Schedule__Header__Menu,HomePage__Section__Schedule__TS__Header,HomePage__Section__Schedule__TS__Header__Left,HomePage__Section__Schedule__TS__Header__Left__Date,HomePage__Section__Schedule__TS__Header__Left__Name } from "./HomePage.Styles";
import { useState } from "react";
import SideMenuLogic from "@/components/commons/SideMenu/SideMenu.Container";
import CreateModalLogic from "@/components/commons/CreateModal/CreateModal.Container";

export default function HomePageUI(props){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileAdj, setIsProfileAdj] = useState(false);
    const [openTSArr, setOpenTSArr] = useState([]);

    const onClickTS = (id) => {
        if(!openTSArr.includes(id)){
            setOpenTSArr(prev =>[...prev,id]);
        }else{
            const newArr = openTSArr.filter((data) => data !== id);
            setOpenTSArr(newArr);
        }
        console.log(id);
    }

    return(
        <>
        <HomePage__Wrapper>
        <SideMenuLogic 
        isMenuOpen = {isMenuOpen} 
        setIsMenuOpen = {setIsMenuOpen}
        >
        </SideMenuLogic>
        <HomePage__Container>
            <HomePage__Header>
                <HomePage__Header_Left>
                    <HomePage__Header__Left__Menu
                        onClick={() => {
                            isMenuOpen?setIsMenuOpen(false):setIsMenuOpen(true);
                        }}
                    ><MenuIcon></MenuIcon></HomePage__Header__Left__Menu>
                    <img src="/Image/Logo.png"/>
                </HomePage__Header_Left>
                <HomePage__Header_Right>
                    <HomePage__Header__Right__User
                        onClick={() => {
                            props.onClickLogout();
                        }}
                    ><UserIcon></UserIcon></HomePage__Header__Right__User>
                </HomePage__Header_Right>
            </HomePage__Header>
            <HomePage__Section>
                <HomePage__Section__Profile__Container>
                    <HomePage__Section__Profile__ProfileImage
                        profileImage = {props.profileImage}
                        onMouseEnter={() => {setIsProfileAdj(true)}}
                        onMouseOut={() => {setIsProfileAdj(false)}}
                    >
                        <HomePage__Section__Profile__ProfileImageCover
                            isProfileAdj = {isProfileAdj}
                        >
                            수정하기
                        </HomePage__Section__Profile__ProfileImageCover>
                    </HomePage__Section__Profile__ProfileImage>
                    <HomePage__Section__Profile__Content>
                        {props.userName}
                    </HomePage__Section__Profile__Content>
                </HomePage__Section__Profile__Container>
                <HomePage__Section__Title>내 일정</HomePage__Section__Title>
                {props.scheduleArr?.map((data,index) => (
                    <>
                    <HomePage__Section__Schedule__Container>
                        <HomePage__Section__Schedule__Header>
                            <TeamIcon></TeamIcon> {data.team_name}
                        </HomePage__Section__Schedule__Header>
                    </HomePage__Section__Schedule__Container>
                    
                    {data.team_schedules.map((d,i)=>{
                        return(
                        <>
                        <HomePage__Section__Schedule__TS>
                        <HomePage__Section__Schedule__TS__Header
                            onClick={() =>{
                                onClickTS(`${data.team_id}-${d.team_schedule_id}`)
                            }}
                        >
                            <HomePage__Section__Schedule__TS__Header__Left>
                                <HomePage__Section__Schedule__TS__Header__Left__Name>{d.team_schedule_name}</HomePage__Section__Schedule__TS__Header__Left__Name>
                                <HomePage__Section__Schedule__TS__Header__Left__Date><ScheduleIcon></ScheduleIcon> {d.start_date} - {d.end_date}</HomePage__Section__Schedule__TS__Header__Left__Date>
                            </HomePage__Section__Schedule__TS__Header__Left>
                            <HomePage__Section__Schedule__Header__Menu
                                isOpened = {openTSArr.includes(`${data.team_id}-${d.team_schedule_id}`)}
                            >
                                <BackIcon></BackIcon>
                            </HomePage__Section__Schedule__Header__Menu>
                        </HomePage__Section__Schedule__TS__Header>
                        {(openTSArr.includes(`${data.team_id}-${d.team_schedule_id}`))&&d.personal_schedules?.map((dat,ind) => (
                            <HomePage__Section__Schedule__PS>
                                <div>• {dat.detail_name} ({dat.detail_status})</div>
                                <HomePage__Section__Schedule__Header__Menu>
                                    <VerticalDots></VerticalDots>
                                </HomePage__Section__Schedule__Header__Menu>
                            </HomePage__Section__Schedule__PS>
                        ))}
                        </HomePage__Section__Schedule__TS>
                        </>
                    )})}
                    </>
                ))}
            </HomePage__Section>
            </HomePage__Container>
        </HomePage__Wrapper>
        </>
    )
}