import { useAuth } from "@/utils/AuthContext";
import HomePageUI from "./HomePage.Presenter";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getHierarchicalSchedules } from "@/utils/ScheduleManager";
import { updatePersonalSchedule,deletePersonalSchedule } from "@/utils/ScheduleManager";

export default function HomePageLogic(){
    const {token, user, loading, isAuthenticated, logout} = useAuth();
    const router = useRouter();


    //프로필 이미지 경로
    const [profileImage, setProfileImage] = useState("/Image/default-avatar.png")
    //유저 이름
    const [userName, setUserName] = useState("");
    //스케쥴 배열
    const [scheduleArr, setScheduleArr] = useState([]);
    //수정용 세부 일정 아이디
    const [personalId, setPersonalId] = useState("");
    //수정된 세부 일정 이름
    const [changedPName,setChangedPName] = useState("");
    //수정된 세부 일정 상태
    const [changedPState, setChangedPState] = useState("");
    

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

    const onChangeChangedPName = (e) => (setChangedPName(e.target.value));
    const onChangeChangedPState = (e) => (setChangedPState(e.target.value));

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

        const onDeletePersonalSchedule = () =>{
            try{
                deletePersonalSchedule(personalId, token);
                location.reload();
            }catch(error){
                console.error(error);
            }
        }
    
        const onUpdatePersonalSchedule = () =>{
            try{
                if(changedPName != ""){
                updatePersonalSchedule(personalId, {detail_name:changedPName, detail_status:changedPState},token);
                setChangedPName("");
                location.reload();
                }else{
                    console.log(changedPName);
                }
            }catch(error){
                console.error(error);
            }
        }
    

    return(
        <HomePageUI
            profileImage = {profileImage}
            userName = {userName}
            onClickLogout = {onClickLogout}
            scheduleArr = {scheduleArr}
            changedPName = {changedPName}
            setPersonalId = {setPersonalId}
            setChangedPName = {setChangedPName}
            onChangeChangedPName = {onChangeChangedPName}
            onChangeChangedPState = {onChangeChangedPState}
            onDeletePersonalSchedule = {onDeletePersonalSchedule}
            onUpdatePersonalSchedule = {onUpdatePersonalSchedule}
        ></HomePageUI>
    )
}