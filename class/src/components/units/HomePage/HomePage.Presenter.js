import { MenuIcon, PlusIcon, UserIcon } from "@/utils/SvgProvider";
import { HomePage__Container, HomePage__CreateModal__Button, HomePage__CreateModal__Input, HomePage__Header, HomePage__Header__Left__Menu, HomePage__Header__Right__CreateBtn, HomePage__Header__Right__User, HomePage__Header_Left, HomePage__Header_Right, HomePage__Menu__Container, HomePage__Menu__Subtitle, HomePage__Menu__Title, HomePage__Menu__Wrapper, HomePage__Section, HomePage__Section__Profile__Container, HomePage__Section__Profile__Content, HomePage__Section__Profile__ProfileImage, HomePage__Section__Profile__ProfileImageCover, HomePage__Section__Title, HomePage__Wrapper } from "./HomePage.Styles";
import { useState } from "react";
import SideMenuLogic from "@/components/commons/SideMenu/SideMenu.Container";
import CreateModalLogic from "@/components/commons/CreateModal/CreateModal.Container";

export default function HomePageUI(props){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileAdj, setIsProfileAdj] = useState(false);

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
                    <HomePage__Header__Right__User><UserIcon></UserIcon></HomePage__Header__Right__User>
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
            </HomePage__Section>
            </HomePage__Container>
        </HomePage__Wrapper>
        </>
    )
}