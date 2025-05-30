import styled from "@emotion/styled"

export const TeamPage__Wrapper = styled.div`
    width:100%;
    min-height:100vh;

    background:linear-gradient(to bottom, #e8f7ff, #ffffff);
    position:relative;
`

export const TeamPage__Container = styled.div`
    width:100%;
    padding:8px;
`

export const TeamPage__Header = styled.div`
    width:100%;

    display:flex;
    flex-direction:row;
    justify-content:space-between;
`

export const TeamPage__Header_Left = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`

export const TeamPage__Header__Left__Menu = styled.div`
    height:100%;
    aspect-ratio:1/1;

    display:flex;
    justify-content:center;
    align-items:center;

    cursor: pointer;
`

export const TeamPage__Header_Right = styled.div`
    display:flex;
    flex-direction:row;

    gap:8px;
`

export const TeamPage__Header__Right__User = styled.div`
    height:100%;
    aspect-ratio:1/1;

    display:flex;
    justify-content:center;
    align-items:center;

    cursor: pointer;
`

export const TeamPage__Section = styled.div`
    width:100%;
    padding: 20px 0;

    display:flex;
    flex-direction:column;
    gap:8px;
`

export const TeamPage__Section__Title = styled.div`
    width:100%;
    font-size:18px;
`

export const TeamPage__Section__TeamSchedule__Wrapper = styled.div`
    width:100%;
    min-height:100px;
`

export const TeamPage__Section__TeamSchedule__Container = styled.div`
    width:100%;
    height:100px;
    padding:12px;
    
    border-radius:30px;
    border: 1px solid #d9d9d9;
    background-color:white;

    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const TeamPage__Section__TeamSchedule__Container__NS = styled.div`
    width:100%;
    height:100px;
    padding:12px;
    
    border-radius:30px;
    border: 1px solid #d9d9d9;
    background-color:white;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:8px;
`

export const TeamPage__Button = styled.div`
    width:200px;
    padding: 5px 12px;

    border-radius:4px;
    color:black;
    background-color:white;
    border: 1px solid #d9d9d9;

    display:flex;
    justify-content:center;
    align-items:center;

    font-size:14px;

    cursor: pointer;
    &:hover{
        background-color:#ececec;
    }
`

export const TeamPage__Input = styled.input`
    width:100%;
    border:1px solid #d9d9d9;
    border-radius:4px;
    padding: 5px 12px;

    font-size: 14px;
    line-height:20px;
`  

export const TeamPage__SubmitButton = styled.div`
    width:100%;
    padding: 5px 12px;

    border-radius:4px;
    color:white;
    background-color:#1f883d;
    
    display:flex;
    justify-content:center;
    align-items:center;

    font-size:14px;

    cursor: pointer;
`

export const TeamPage__Section__PersonalSchedule__Wrapper = styled.div`
    width:100%;
    min-height:100px;
`

export const TeamPage__Section__PersonalSchedule__Container = styled.div`
    width:100%;
    height:100px;
    padding:12px;
    
    border-radius:30px;
    border: 1px solid #d9d9d9;
    background-color:white;

    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const TeamPage__Section__PersonalSchedule__Left = styled.div`
    height:100%;

    display:flex;
    align-items:center;
    gap: 8px;
`

export const TeamPage__Section__PersonalSchedule__Left__Img = styled.div`
    height:100%;
    aspect-ratio:1/1;
    border-radius:50%;

    overflow:hidden;
    background-image:${(props) => (`url(${props.profileImage})`)};
    background-size:cover;
`

export const TeamPage__Section__PersonalSchedule__Left__Describe = styled.div`
    height:100%;

    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
`

export const TeamPage__Section__PersonalSchedule__Left__Describe__Name = styled.div`
    font-size:18px;
`

export const TeamPage__Section__PersonalSchedule__Left__Describe__Role = styled.div`
    color:#767676;
`