//ScheduleManager.js
import axios from "axios";

// ======================
// 팀 스케줄 관련 함수들
// ======================

// 특정 팀의 스케줄 목록 조회
export const getTeamSchedules = async(teamId, token) => {
    try {
        const response = await axios.get(`/api/schedule.php?team_id=${teamId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        
        console.log('Team schedules retrieved:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching team schedules:', error);
        throw error;
    }
}

// 특정 스케줄 상세 조회 (개인 스케줄 포함)
export const getScheduleDetail = async(scheduleId, token) => {
    try {
        const response = await axios.get(`/api/schedule.php?id=${scheduleId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        
        console.log('Schedule detail retrieved:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching schedule detail:', error);
        throw error;
    }
}

// 내 할당 스케줄 조회 (모든 팀의 내 스케줄)
export const getMySchedules = async(filters = {}, token) => {
    try {
        const params = new URLSearchParams();
        if (filters.status) params.append('status', filters.status);
        if (filters.date) params.append('date', filters.date);
        
        const url = params.toString() ? `/api/schedule.php?${params}` : '/api/schedule.php';
        
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        
        console.log('My schedules retrieved:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching my schedules:', error);
        throw error;
    }
}

// 팀 스케줄 생성
// scheduleData{team_id, schedule_name, start_date, end_date}
export const createTeamSchedule = async(scheduleData, token) => {
    try {
        const response = await axios.post("/api/schedule.php", scheduleData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        
        console.log('Team schedule created:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating team schedule:', error);
        throw error;
    }
}

// 팀 스케줄 수정 (관리자만)
export const updateTeamSchedule = async(scheduleId, scheduleData, token) => {
    try {
        const response = await axios.put(`/api/schedule.php?id=${scheduleId}`, scheduleData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        
        console.log('Team schedule updated:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating team schedule:', error);
        throw error;
    }
}

// 팀 스케줄 삭제 (관리자만)
export const deleteTeamSchedule = async(scheduleId, token) => {
    try {
        const response = await axios.delete(`/api/schedule.php?id=${scheduleId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        
        console.log('Team schedule deleted:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error deleting team schedule:', error);
        throw error;
    }
}

// ======================
// 개인 스케줄 관련 함수들
// ======================

// 개인 스케줄(세부 작업) 생성
export const createPersonalSchedule = async(personalData, token) => {
    try {
        const response = await axios.post("/api/schedule.php", {
            action: 'create_personal',
            ...personalData
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        
        console.log('Personal schedule created:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating personal schedule:', error);
        throw error;
    }
}

// 개인 스케줄 수정
export const updatePersonalSchedule = async(personalScheduleId, updateData, token) => {
    try {
        const response = await axios.put("/api/schedule.php", {
            type: 'personal',
            personal_schedule_id: personalScheduleId,
            ...updateData
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        
        console.log('Personal schedule updated:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating personal schedule:', error);
        throw error;
    }
}

// 개인 스케줄 상태 빠른 업데이트 (완료/미완료 토글)
export const updateScheduleStatus = async(personalScheduleId, status, token) => {
    try {
        const response = await axios.post("/api/schedule.php", {
            action: 'update_status',
            personal_schedule_id: personalScheduleId,
            status: status
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        
        console.log('Schedule status updated:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating schedule status:', error);
        throw error;
    }
}

// 개인 스케줄 삭제
export const deletePersonalSchedule = async(personalScheduleId, token) => {
    try {
        const response = await axios.delete("/api/schedule.php", {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            data: {
                type: 'personal',
                personal_schedule_id: personalScheduleId
            }
        });
        
        console.log('Personal schedule deleted:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error deleting personal schedule:', error);
        throw error;
    }
}

// ======================
// 계층적 스케줄 구조 조회 함수들
// ======================

// 멤버 > 팀 스케줄 > 개인 스케줄 구조로 조회
export const getHierarchicalSchedules = async(token) => {
    try {
        // 내 모든 스케줄을 조회
        const mySchedulesResponse = await getMySchedules({}, token);
        
        if (!mySchedulesResponse.success) {
            throw new Error('Failed to fetch my schedules');
        }
        
        const mySchedules = mySchedulesResponse.data.my_schedules;
        
        // 팀별로 그룹화
        const teamGroups = {};
        
        mySchedules.forEach(schedule => {
            const teamId = schedule.team_id;
            const teamName = schedule.team_name;
            
            if (!teamGroups[teamId]) {
                teamGroups[teamId] = {
                    team_id: teamId,
                    team_name: teamName,
                    team_schedules: {}
                };
            }
            
            const teamScheduleId = schedule.team_schedules_id || schedule.personal_schedule_id;
            const teamScheduleName = schedule.team_schedule_name;
            
            if (!teamGroups[teamId].team_schedules[teamScheduleId]) {
                teamGroups[teamId].team_schedules[teamScheduleId] = {
                    team_schedule_id: teamScheduleId,
                    team_schedule_name: teamScheduleName,
                    start_date: schedule.start_date,
                    end_date: schedule.end_date,
                    team_status: schedule.team_status,
                    personal_schedules: []
                };
            }
            
            // 개인 스케줄 추가
            teamGroups[teamId].team_schedules[teamScheduleId].personal_schedules.push({
                personal_schedule_id: schedule.personal_schedule_id,
                detail_name: schedule.detail_name,
                detail_status: schedule.detail_status,
                sort_order: schedule.sort_order,
                created_at: schedule.created_at,
                position: schedule.position,
                role: schedule.role
            });
        });
        
        // 배열 형태로 변환 및 정렬
        const hierarchicalData = Object.values(teamGroups).map(team => ({
            ...team,
            team_schedules: Object.values(team.team_schedules).map(teamSchedule => ({
                ...teamSchedule,
                personal_schedules: teamSchedule.personal_schedules.sort((a, b) => 
                    (a.sort_order || 0) - (b.sort_order || 0)
                ),
                completion_rate: calculateCompletionRate(teamSchedule.personal_schedules)
            })).sort((a, b) => new Date(b.start_date) - new Date(a.start_date))
        }));
        
        return {
            success: true,
            data: {
                hierarchical_schedules: hierarchicalData,
                total_teams: hierarchicalData.length,
                total_schedules: mySchedules.length
            }
        };
    } catch (error) {
        console.error('Error fetching hierarchical schedules:', error);
        throw error;
    }
}

// 특정 팀의 계층적 스케줄 구조 조회
export const getTeamHierarchicalSchedules = async(teamId, token) => {
    try {
        // 특정 팀의 스케줄만 조회
        const teamSchedulesResponse = await getTeamSchedules(teamId, token);
        
        if (!teamSchedulesResponse.success) {
            throw new Error('Failed to fetch team schedules');
        }
        
        const teamData = teamSchedulesResponse.data;
        const teamSchedules = teamData.schedules;
        
        // 각 팀 스케줄에 대해 상세 정보 및 개인 스케줄 조회
        const detailedSchedules = await Promise.all(
            teamSchedules.map(async (schedule) => {
                try {
                    const detailResponse = await getScheduleDetail(schedule.id, token);
                    
                    if (detailResponse.success) {
                        const scheduleDetail = detailResponse.data.schedule;
                        return {
                            team_schedule_id: schedule.id,
                            team_schedule_name: schedule.schedule_name,
                            start_date: schedule.start_date,
                            end_date: schedule.end_date,
                            status: schedule.status,
                            progress_rate: scheduleDetail.progress?.rate || 0,
                            personal_schedules: scheduleDetail.personal_schedules || [],
                            team_members: scheduleDetail.team_members || []
                        };
                    }
                    return null;
                } catch (error) {
                    console.warn(`Failed to fetch detail for schedule ${schedule.id}:`, error);
                    return {
                        team_schedule_id: schedule.id,
                        team_schedule_name: schedule.schedule_name,
                        start_date: schedule.start_date,
                        end_date: schedule.end_date,
                        status: schedule.status,
                        progress_rate: 0,
                        personal_schedules: [],
                        team_members: []
                    };
                }
            })
        );
        
        return {
            success: true,
            data: {
                team_info: {
                    team_id: teamId,
                    team_name: teamData.team?.name || '팀명 없음'
                },
                team_schedules: detailedSchedules.filter(schedule => schedule !== null),
                total_schedules: detailedSchedules.length
            }
        };
    } catch (error) {
        console.error('Error fetching team hierarchical schedules:', error);
        throw error;
    }
}

// 사용자 개인 대시보드용 스케줄 요약
export const getPersonalScheduleDashboard = async(token) => {
    try {
        const hierarchicalData = await getHierarchicalSchedules(token);
        
        if (!hierarchicalData.success) {
            throw new Error('Failed to fetch hierarchical schedules');
        }
        
        const schedules = hierarchicalData.data.hierarchical_schedules;
        
        // 대시보드 요약 정보 생성
        const dashboard = {
            user_info: {
                total_teams: schedules.length,
                total_team_schedules: 0,
                total_personal_tasks: 0
            },
            recent_schedules: [],
            urgent_tasks: [],
            completion_summary: {
                completed: 0,
                pending: 0,
                overdue: 0
            }
        };
        
        const today = new Date().toISOString().split('T')[0];
        
        schedules.forEach(team => {
            Object.values(team.team_schedules).forEach(teamSchedule => {
                dashboard.user_info.total_team_schedules++;
                
                teamSchedule.personal_schedules.forEach(personalTask => {
                    dashboard.user_info.total_personal_tasks++;
                    
                    // 완료 상태 통계
                    if (personalTask.detail_status === '완료') {
                        dashboard.completion_summary.completed++;
                    } else {
                        dashboard.completion_summary.pending++;
                        
                        // 마감일 지난 작업 확인
                        if (teamSchedule.end_date < today) {
                            dashboard.completion_summary.overdue++;
                            dashboard.urgent_tasks.push({
                                team_name: team.team_name,
                                team_schedule_name: teamSchedule.team_schedule_name,
                                detail_name: personalTask.detail_name,
                                end_date: teamSchedule.end_date,
                                days_overdue: Math.floor((new Date() - new Date(teamSchedule.end_date)) / (1000 * 60 * 60 * 24))
                            });
                        }
                    }
                    
                    // 최근 스케줄 (생성일 기준)
                    dashboard.recent_schedules.push({
                        team_name: team.team_name,
                        team_schedule_name: teamSchedule.team_schedule_name,
                        detail_name: personalTask.detail_name,
                        detail_status: personalTask.detail_status,
                        created_at: personalTask.created_at,
                        end_date: teamSchedule.end_date
                    });
                });
            });
        });
        
        // 최근 스케줄 정렬 (최신순)
        dashboard.recent_schedules.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        dashboard.recent_schedules = dashboard.recent_schedules.slice(0, 5); // 최근 5개만
        
        // 긴급 작업 정렬 (지연일수 많은 순)
        dashboard.urgent_tasks.sort((a, b) => b.days_overdue - a.days_overdue);
        dashboard.urgent_tasks = dashboard.urgent_tasks.slice(0, 5); // 상위 5개만
        
        // 완료율 계산
        dashboard.completion_summary.completion_rate = 
            dashboard.user_info.total_personal_tasks > 0 
                ? (dashboard.completion_summary.completed / dashboard.user_info.total_personal_tasks * 100).toFixed(1)
                : 0;
        
        return {
            success: true,
            data: {
                dashboard,
                hierarchical_schedules: schedules
            }
        };
    } catch (error) {
        console.error('Error creating personal schedule dashboard:', error);
        throw error;
    }
}

// 완료율 계산 헬퍼 함수
const calculateCompletionRate = (personalSchedules) => {
    if (!personalSchedules || personalSchedules.length === 0) {
        return 0;
    }
    
    const completedCount = personalSchedules.filter(schedule => 
        schedule.detail_status === '완료'
    ).length;
    
    return Math.round((completedCount / personalSchedules.length) * 100);
}

// 스케줄 상태 토글 (완료 ↔ 미완료)
export const toggleScheduleStatus = async(personalScheduleId, currentStatus, token) => {
    const newStatus = currentStatus === '완료' ? '미완료' : '완료';
    return await updateScheduleStatus(personalScheduleId, newStatus, token);
}

// 특정 날짜 범위의 내 스케줄 조회
export const getMySchedulesByDateRange = async(startDate, endDate, token) => {
    try {
        // 각 날짜별로 조회해서 합치기 (API가 범위 조회를 지원하지 않는 경우)
        const schedules = [];
        const start = new Date(startDate);
        const end = new Date(endDate);
        
        for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
            const dateStr = date.toISOString().split('T')[0]; // YYYY-MM-DD 형식
            try {
                const daySchedules = await getMySchedules({ date: dateStr }, token);
                schedules.push(...daySchedules.data.my_schedules);
            } catch (error) {
                console.warn(`No schedules found for ${dateStr}`);
            }
        }
        
        return {
            success: true,
            data: {
                my_schedules: schedules,
                date_range: { start: startDate, end: endDate },
                total_count: schedules.length
            }
        };
    } catch (error) {
        console.error('Error fetching schedules by date range:', error);
        throw error;
    }
}

// 팀별 스케줄 통계 조회
export const getTeamScheduleStats = async(teamId, token) => {
    try {
        const schedules = await getTeamSchedules(teamId, token);
        
        if (!schedules.success) {
            throw new Error('Failed to fetch team schedules');
        }
        
        const scheduleList = schedules.data.schedules;
        const stats = {
            total: scheduleList.length,
            completed: 0,
            in_progress: 0,
            planned: 0,
            overdue: 0
        };
        
        const today = new Date().toISOString().split('T')[0];
        
        scheduleList.forEach(schedule => {
            switch (schedule.status) {
                case '완료':
                    stats.completed++;
                    break;
                case '진행중':
                    stats.in_progress++;
                    if (schedule.end_date < today) {
                        stats.overdue++;
                    }
                    break;
                case '예정':
                    stats.planned++;
                    break;
            }
        });
        
        return {
            success: true,
            data: {
                team_id: teamId,
                statistics: stats,
                completion_rate: stats.total > 0 ? (stats.completed / stats.total * 100).toFixed(1) : 0
            }
        };
    } catch (error) {
        console.error('Error calculating team schedule stats:', error);
        throw error;
    }
}

// 내 스케줄 통계 조회
export const getMyScheduleStats = async(token) => {
    try {
        const mySchedules = await getMySchedules({}, token);
        
        if (!mySchedules.success) {
            throw new Error('Failed to fetch my schedules');
        }
        
        const scheduleList = mySchedules.data.my_schedules;
        const stats = {
            total: scheduleList.length,
            completed: 0,
            pending: 0,
            overdue: 0
        };
        
        const today = new Date().toISOString().split('T')[0];
        
        scheduleList.forEach(schedule => {
            if (schedule.detail_status === '완료') {
                stats.completed++;
            } else {
                stats.pending++;
                // 팀 스케줄 종료일이 지났는데 개인 스케줄이 미완료면 지연
                if (schedule.end_date < today) {
                    stats.overdue++;
                }
            }
        });
        
        return {
            success: true,
            data: {
                statistics: stats,
                completion_rate: stats.total > 0 ? (stats.completed / stats.total * 100).toFixed(1) : 0
            }
        };
    } catch (error) {
        console.error('Error calculating my schedule stats:', error);
        throw error;
    }
}

// 스케줄 검색 (키워드로 검색)
export const searchSchedules = async(keyword, filters = {}, token) => {
    try {
        const mySchedules = await getMySchedules(filters, token);
        
        if (!mySchedules.success) {
            throw new Error('Failed to fetch schedules for search');
        }
        
        const filteredSchedules = mySchedules.data.my_schedules.filter(schedule => 
            schedule.detail_name.toLowerCase().includes(keyword.toLowerCase()) ||
            schedule.team_schedule_name.toLowerCase().includes(keyword.toLowerCase()) ||
            schedule.team_name.toLowerCase().includes(keyword.toLowerCase())
        );
        
        return {
            success: true,
            data: {
                my_schedules: filteredSchedules,
                search_keyword: keyword,
                total_count: filteredSchedules.length
            }
        };
    } catch (error) {
        console.error('Error searching schedules:', error);
        throw error;
    }
}

// 팀 전체 멤버별 스케줄 구조 조회 (멤버 > 팀스케줄 > 개인스케줄)
export const getTeamMembersHierarchicalSchedules = async(teamId, token) => {
    try {
        // 1. 팀 상세 정보 및 스케줄 조회
        const teamDetailResponse = await getTeamHierarchicalSchedules(teamId, token);
        
        if (!teamDetailResponse.success) {
            throw new Error('Failed to fetch team schedules');
        }
        
        const teamSchedules = teamDetailResponse.data.team_schedules;
        const teamInfo = teamDetailResponse.data.team_info;
        
        // 2. 멤버별로 그룹화
        const memberGroups = {};
        
        teamSchedules.forEach(teamSchedule => {
            teamSchedule.personal_schedules.forEach(personalSchedule => {
                const memberId = personalSchedule.assignee_id;
                const memberName = personalSchedule.assignee_name;
                
                if (!memberGroups[memberId]) {
                    memberGroups[memberId] = {
                        member_id: memberId,
                        member_name: memberName,
                        team_schedules: {}
                    };
                }
                
                if (!memberGroups[memberId].team_schedules[teamSchedule.team_schedule_id]) {
                    memberGroups[memberId].team_schedules[teamSchedule.team_schedule_id] = {
                        team_schedule_id: teamSchedule.team_schedule_id,
                        team_schedule_name: teamSchedule.team_schedule_name,
                        start_date: teamSchedule.start_date,
                        end_date: teamSchedule.end_date,
                        status: teamSchedule.status,
                        personal_schedules: []
                    };
                }
                
                memberGroups[memberId].team_schedules[teamSchedule.team_schedule_id].personal_schedules.push({
                    personal_schedule_id: personalSchedule.personal_schedule_id,
                    detail_name: personalSchedule.detail_name,
                    detail_status: personalSchedule.detail_status,
                    sort_order: personalSchedule.sort_order,
                    created_at: personalSchedule.created_at
                });
            });
        });
        
        // 3. 배열 형태로 변환 및 통계 계산
        const membersData = Object.values(memberGroups).map(member => {
            const teamSchedulesArray = Object.values(member.team_schedules).map(teamSchedule => ({
                ...teamSchedule,
                personal_schedules: teamSchedule.personal_schedules.sort((a, b) => 
                    (a.sort_order || 0) - (b.sort_order || 0)
                ),
                completion_rate: calculateCompletionRate(teamSchedule.personal_schedules)
            }));
            
            // 멤버별 전체 통계 계산
            const allPersonalTasks = teamSchedulesArray.flatMap(ts => ts.personal_schedules);
            const memberStats = {
                total_tasks: allPersonalTasks.length,
                completed_tasks: allPersonalTasks.filter(task => task.detail_status === '완료').length,
                pending_tasks: allPersonalTasks.filter(task => task.detail_status === '미완료').length,
                completion_rate: calculateCompletionRate(allPersonalTasks)
            };
            
            return {
                ...member,
                team_schedules: teamSchedulesArray.sort((a, b) => new Date(b.start_date) - new Date(a.start_date)),
                member_stats: memberStats
            };
        });
        
        // 4. 팀 전체 통계 계산
        const teamStats = {
            total_members: membersData.length,
            total_team_schedules: teamSchedules.length,
            total_personal_tasks: membersData.reduce((sum, member) => sum + member.member_stats.total_tasks, 0),
            average_completion_rate: membersData.length > 0 
                ? Math.round(membersData.reduce((sum, member) => sum + member.member_stats.completion_rate, 0) / membersData.length)
                : 0
        };
        
        return {
            success: true,
            data: {
                team_info: teamInfo,
                members_schedules: membersData,
                team_stats: teamStats
            }
        };
    } catch (error) {
        console.error('Error fetching team members hierarchical schedules:', error);
        throw error;
    }
}