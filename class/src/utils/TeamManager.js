//TeamManager.js
import axios from "axios";

// 팀 목록 조회
export const getAllTeams = async(token) => {
    try {
        const response = await axios.get("/api/team.php", {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        
        console.log('Teams retrieved:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching teams:', error);
        throw error;
    }
}

// 특정 팀 상세 조회
export const getTeamDetail = async(teamId, token) => {
    try {
        const response = await axios.get(`/api/team.php?id=${teamId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        
        console.log('Team detail retrieved:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching team detail:', error);
        throw error;
    }
}

// 팀 생성
// teamData {team_name:team_name}
export const createTeam = async(teamData, token) => {
    try {
        const response = await axios.post("/api/team.php", teamData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        
        console.log('Team created:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating team:', error);
        throw error;
    }
}

// 팀 수정
export const updateTeam = async(teamId, teamData, token) => {
    try {
        const response = await axios.put(`/api/team.php?id=${teamId}`, teamData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        
        console.log('Team updated:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating team:', error);
        throw error;
    }
}

// 팀 삭제
export const deleteTeam = async(teamId, token) => {
    try {
        const response = await axios.delete(`/api/team.php?id=${teamId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        
        console.log('Team deleted:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error deleting team:', error);
        throw error;
    }
}

// 팀원 추가
// team Id: teamID, memberData{user_email:user_email, position, role}
export const addTeamMember = async(teamId, memberData, token) => {
    try {
        const response = await axios.post("/api/team.php", {
            action: 'join',
            team_id: teamId,
            ...memberData
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        
        console.log('Team member added:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error adding team member:', error);
        throw error;
    }
}

// 팀 탈퇴
export const leaveTeam = async(teamId, token) => {
    try {
        const response = await axios.post("/api/team.php", {
            action: 'leave',
            team_id: teamId
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        
        console.log('Left team:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error leaving team:', error);
        throw error;
    }
}