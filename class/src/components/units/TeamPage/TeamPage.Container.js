import { useRouter } from "next/router";
import TeamPageUI from "./TeamPage.Presenter";
import { useEffect, useState } from "react";
import { useAuth } from "@/utils/AuthContext";
import { createPersonalSchedule, getTeamHierarchicalSchedules, getTeamSchedules } from "@/utils/ScheduleManager";
import { createTeamSchedule } from "@/utils/ScheduleManager";
import { getTeamDetail } from "@/utils/TeamManager";

export default function TeamPageLogic(){
    const router = useRouter();
    const {token, isAuthenticated, loading, user} = useAuth();
    const {teamId} = router.query;

    const [memberArr, setMemberArr] = useState([]);
    const [teamScheduleArr, setTeamScheduleArr] = useState([]);
    const [personalScheduleArr, setPersonalScheduleArr] = useState([]);
    //일정 이름
    const [scheduleName, setScheduleName] = useState("");
    //시작 날짜 (yyyy-mm-dd 형태)
    const [startDate, setStartDate] = useState("");
    //종료 날짜
    const [endDate,setEndDate] = useState("");
    //관리자 여부
    const [isAdmin,setIsAdmin] = useState(false);
    //사용자 아이디
    const [userName, setUserName] = useState("");
    //세부 일정 이름
    const [DSName, setDSName] = useState("");
    //세부 일정을 만들 팀 일정ID
    const [curSchedule, setCurSchedule] = useState("");
    //유저 아이디
    const [userId, setUserId] = useState("");

    useEffect(() => {
        if(token && !loading && teamId){
            fetchTeamSchedule();
            fetchTeamMember();
            fetchHierarchSchedule();
            setUserName(user.name);
            setUserId(user.id);
        }
    },[token,loading, teamId, user]);

    const onChangeScheduleName = (e) => (setScheduleName(e.target.value));
    const onChangeStartDate = (e) => (setStartDate(e.target.value));
    const onChangeEndDate = (e) => (setEndDate(e.target.value))
    const onChangeDSName = (e) => (setDSName(e.target.value));
    const onChangeSelectedSchedule = (e) => (setSelectedSchedule(e.target.value));

    const fetchTeamMember = () => {
        try{
            getTeamDetail(teamId,token).then((res) =>{
                setMemberArr(res.data.team.members);
                setIsAdmin(res.data.team.is_admin);
            })
        }catch(error){
            console.error(error);
        }
    }

    const fetchTeamSchedule = () => {
        try{
            getTeamSchedules(teamId,token).then((res) => {
                setTeamScheduleArr(res.data.schedules);
                console.log(res.data.schedules);
            })
        }catch(error){
            console.error(error);
        }
    }

    const fetchHierarchSchedule = async () => {
    try {
        const res = await getTeamHierarchicalSchedules(teamId, token);
        
        const allPersonalSchedules = [];
        
        res.data.team_schedules.forEach((teamSchedule) => {
            teamSchedule.personal_schedules.forEach((personalSchedule) => {
                // ✅ 팀 스케줄 정보 추가
                allPersonalSchedules.push({
                    ...personalSchedule,
                    // 팀 스케줄 식별 정보
                    team_schedule_id: teamSchedule.team_schedule_id,
                    team_schedule_name: teamSchedule.team_schedule_name,
                    
                    // 팀 스케줄 기본 정보
                    team_start_date: teamSchedule.start_date,
                    team_end_date: teamSchedule.end_date,
                    team_status: teamSchedule.status,
                    team_completion_rate: teamSchedule.completion_rate,
                    
                    // 팀 정보 (있다면)
                    team_id: teamId,
                    team_name: res.data.team_info?.team_name || '팀명 없음'
                });
            });
        });
        
        setPersonalScheduleArr(allPersonalSchedules);
        console.log('Personal Schedule Arr with Team Info >>', allPersonalSchedules);
    } catch (error) {
        console.error(error);
    }
}

    const onCreateTeamSchedule = () => {
        try{
            createTeamSchedule({team_id:teamId, schedule_name:scheduleName, start_date:startDate, end_date:endDate},token).then(
                (res) => {
                    console.log(res);
                }
            )
                setScheduleName("");
                setStartDate("");
                setEndDate("");
                fetchTeamSchedule();
        }catch(error){
            console.error(error);
        }
    }

    const onCreatePersonalSchedule = () => {
        try{
            createPersonalSchedule({team_schedules_id:curSchedule, user_id:user.id, detail_name:DSName}, token)
            location.reload();
        }catch(error){
            console.error(error);
        }
    }

    return(
        <TeamPageUI
            teamScheduleArr = {teamScheduleArr}
            personalScheduleArr = {personalScheduleArr}
            onChangeScheduleName = {onChangeScheduleName}
            onChangeStartDate = {onChangeStartDate}
            onChangeEndDate = {onChangeEndDate}
            onChangeDSName = {onChangeDSName}
            onChangeSelectedSchedule = {onChangeSelectedSchedule}
            scheduleName = {scheduleName}
            startDate = {startDate}
            endDate = {endDate}
            memberArr = {memberArr}
            isAdmin = {isAdmin}
            userName = {userName}
            DSName = {DSName}
            userId = {userId}
            curSchedule = {curSchedule}
            setCurSchedule = {setCurSchedule}
            onCreateTeamSchedule = {onCreateTeamSchedule}
            onCreatePersonalSchedule = {onCreatePersonalSchedule}
        ></TeamPageUI>
    )
}