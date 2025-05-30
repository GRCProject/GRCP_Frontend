import { useRouter } from "next/router";
import TeamPageUI from "./TeamPage.Presenter";
import { useEffect, useState } from "react";
import { useAuth } from "@/utils/AuthContext";
import { getTeamMembersHierarchicalSchedules, getTeamSchedules } from "@/utils/ScheduleManager";
import { createTeamSchedule } from "@/utils/ScheduleManager";
import { getTeamDetail } from "@/utils/TeamManager";

export default function TeamPageLogic(){
    const router = useRouter();
    const {token, isAuthenticated, loading} = useAuth();
    const {teamId} = router.query;

    const [memberArr, setMemberArr] = useState([]);
    const [teamScheduleArr, setTeamScheduleArr] = useState([]);
    const [memberScheduleArr, setMemberScheduleArr] = useState([]);
    //일정 이름
    const [scheduleName, setScheduleName] = useState("");
    //시작 날짜 (yyyy-mm-dd 형태)
    const [startDate, setStartDate] = useState("");
    //종료 날짜
    const [endDate,setEndDate] = useState("");

    useEffect(() => {
        if(token && !loading && teamId){
            fetchTeamSchedule();
            fetchHierarchSchedule();
            fetchTeamMember();
        }
    },[token,loading, teamId]);

    const onChangeScheduleName = (e) => (setScheduleName(e.target.value));
    const onChangeStartDate = (e) => (setStartDate(e.target.value));
    const onChangeEndDate = (e) => (setEndDate(e.target.value))

    const fetchTeamMember = () => {
        try{
            getTeamDetail(teamId,token).then((res) =>{
                setMemberArr(res.data.team.members);
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

    const fetchHierarchSchedule = () => {
        try{
            getTeamMembersHierarchicalSchedules(teamId,token).then(
                (res) => {
                    console.log(res);
                }
            )
        }catch(error){
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

    return(
        <TeamPageUI
            teamScheduleArr = {teamScheduleArr}
            memberScheduleArr = {memberScheduleArr}
            onChangeScheduleName = {onChangeScheduleName}
            onChangeStartDate = {onChangeStartDate}
            onChangeEndDate = {onChangeEndDate}
            scheduleName = {scheduleName}
            startDate = {startDate}
            endDate = {endDate}
            memberArr = {memberArr}
            onCreateTeamSchedule = {onCreateTeamSchedule}
        ></TeamPageUI>
    )
}