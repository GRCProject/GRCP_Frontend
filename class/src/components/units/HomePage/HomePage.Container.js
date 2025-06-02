import { useAuth } from "@/utils/AuthContext";
import HomePageUI from "./HomePage.Presenter";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { createTeam, getAllTeams } from "@/utils/TeamManager";

export default function HomePageLogic(){
    const {token, user, loading, isAuthenticated, logout} = useAuth();
    const router = useRouter();


    //프로필 이미지 경로
    const [profileImage, setProfileImage] = useState("/Image/default-avatar.png")
    //유저 이름
    const [userName, setUserName] = useState("");
    

    useEffect(() => {
        // 로딩이 완료되고 인증되지 않은 경우에만 리다이렉트
        if (!loading && !isAuthenticated) {
            alert("잘못된 접근입니다!");
            router.push("/login");
        }
        if(isAuthenticated){
            console.log(user);
            setProfileImage(user.profile_image);
            setUserName(user.name);
        }
    }, [isAuthenticated, loading, router,user]);

    const onClickLogout = () => {
        logout();
    }

    return(
        <HomePageUI
            profileImage = {profileImage}
            userName = {userName}
            onClickLogout = {onClickLogout}
        ></HomePageUI>
    )
}