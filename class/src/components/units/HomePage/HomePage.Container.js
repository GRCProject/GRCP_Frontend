import { useAuth } from "@/utils/AuthContext";
import HomePageUI from "./HomePage.Presenter";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getHierarchicalSchedules } from "@/utils/ScheduleManager";

export default function HomePageLogic(){
    const {token, user, loading, isAuthenticated, logout} = useAuth();
    const router = useRouter();


    //프로필 이미지 경로
    const [profileImage, setProfileImage] = useState("/Image/default-avatar.png")
    //유저 이름
    const [userName, setUserName] = useState("");
    //스케쥴 배열
    const [scheduleArr, setScheduleArr] = useState([]);
    

    useEffect(() => {
        // 로딩이 완료되고 인증되지 않은 경우에만 리다이렉트
        if (!loading && !isAuthenticated) {
            router.push("/login");
        }
        if(isAuthenticated){
            console.log(user);
            fetchMySchedule();
            setProfileImage(user.profile_image);
            setUserName(user.name);
        }
    }, [isAuthenticated, loading, router,user]);

    const onClickLogout = () => {
        logout();
        router.push("/");
    }

    const fetchMySchedule = () => {
        try{
            getHierarchicalSchedules(token).then((res) => {
                console.log(res.data);
                setScheduleArr(res.data.hierarchical_schedules);
            })
        }catch(error){

        }
    }

    return(
        <HomePageUI
            profileImage = {profileImage}
            userName = {userName}
            onClickLogout = {onClickLogout}
            scheduleArr = {scheduleArr}
        ></HomePageUI>
    )
}