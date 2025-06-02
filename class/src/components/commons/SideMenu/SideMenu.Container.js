import { useAuth } from "@/utils/AuthContext";
import SideMenuUI from "./SideMenu.Presenter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { addTeamMember, createTeam,getAllTeams } from "@/utils/TeamManager";

export default function SideMenuLogic(props){
    const router = useRouter();
    const {token, isAuthenticated} = useAuth();

    //활성화된 탭
    const [activeTabArr, setActiveTabArr] = useState([]);
    //생성용 팀 이름
    const [teamName, setTeamName] = useState("");
    //팀 배열
    const [teamArr,setTeamArr] = useState(null);
    //초대용 팀원 이메일
    const [teamEmail, setTeamEmail] = useState("");
    //초대용 팀 아이디
    const [teamId, setTeamId] = useState(null);

    useEffect(() => {
        setActiveTabArr(prev => [...prev, getActiveTabFromPath(router.pathname)]);
        if(isAuthenticated){
        fetchAllTeam();
        }
    },[router.pathname, token]);

    const onChangeTeamName = (e) => {setTeamName(e.target.value)};
    const onChangeTeamEmail = (e) => {setTeamEmail(e.target.value)};

    // URL 경로에 따라 activeTab 결정
    const getActiveTabFromPath = (path) => {
        if (path === ("/home")) return "home";
        return 123;
    };

    const onClickHome = () => {
        router.push("/home");
    }

    const onClickTeamName = (id) => {
        if(!activeTabArr.includes(id)){
            setActiveTabArr(prev => [...prev,id])
        }else{
            const newActiveTab = activeTabArr.filter((e) => e!== id);
            setActiveTabArr(newActiveTab);
        }
    }

    const onClickTeamSchedule = (id) => {
        router.push({
            pathname:"team",
            query:{teamId:id}
        })
        props.setIsMenuOpen(false);
    }

    const fetchAllTeam = () => {
            getAllTeams(token).then((res) =>{
                    setTeamArr(res.data.teams);
                    // console.log(res.data.teams);
                })
        }

    //팀 생성 핸들러
    const onClickCreateTeam = () => {
        if(teamName && teamName !== ""){
            try{
                createTeam({team_name:teamName}, token);
                fetchAllTeam();
            }catch(error){
                console.error(error);
            }
        }
    }

    const onClickInviteMember = () => {
        try{
            addTeamMember(teamId,{user_email:teamEmail}, token).then(
            (res)=>{
                fetchAllTeam();
            }
            )

        }catch(error){
            console.error(error);
        }
    }

    return(
        <SideMenuUI
            isMenuOpen = {props.isMenuOpen}
            setIsMenuOpen = {props.setIsMenuOpen}
            teamArr = {teamArr}
            activeTabArr = {activeTabArr}
            teamName = {teamName}
            teamEmail = {teamEmail}
            onClickTeamName = {onClickTeamName}
            onClickTeamSchedule = {onClickTeamSchedule}
            onClickCreateTeam = {onClickCreateTeam}
            onClickInviteMember = {onClickInviteMember}
            onClickHome = {onClickHome}
            setTeamName = {setTeamName}
            setTeamEmail = {setTeamEmail}
            setTeamId = {setTeamId}
            setActiveTabArr = {setActiveTabArr}
            onChangeTeamName = {onChangeTeamName}
            onChangeTeamEmail = {onChangeTeamEmail}
        ></SideMenuUI>
    )
}