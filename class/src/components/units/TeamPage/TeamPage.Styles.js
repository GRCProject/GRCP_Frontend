import styled from "@emotion/styled"
import DatePicker from "react-datepicker"

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

    display:flex;
    flex-direction:column;
    gap:8px;
`

export const TeamPage__Section__TeamSchedule__Container = styled.div`
    width:100%;
    height:80px;
    padding:12px;
    
    border-radius:15px;
    border: 1px solid #d9d9d9;
    background-color:white;

    display:flex;
    justify-content:space-between;
    align-items:center;

        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

export const TeamPage__Section__TeamSchedule__Left = styled.div`
    height:100%;

    display:flex;
    align-items:center;
    gap:8px;
`

export const TeamPage__Section__TeamSchedule__Describe = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:4px;
`

export const TeamPage__Section__TeamSchedule__Describe__Date = styled.div`
    display:flex;
    align-items:center;
    gap:4px;

    color:#767676;
    font-size:14px;
`

export const TeamPage__Section__TeamSchedule__Container__NS = styled.div`
    width:100%;
    height:100px;
    padding:12px;
    
    border-radius:15px;
    border: 1px solid #d9d9d9;
    background-color:white;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:8px;
`

export const TeamPage__Section__TeamSchedule__Button = styled.div`
    width:100%;
    padding: 5px 12px;

    border-radius:4px;
    border: 1px solid #d9d9d9;
    background-color:white;
    
    display:flex;
    justify-content:center;
    align-items:center;

    font-size:14px;

    cursor: pointer;
    &:hover{
        background-color:#dedede;
    }

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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

    display:flex;
    flex-direction:column;
    gap:8px;
`

export const TeamPage__Section__PersonalSchedule__Container = styled.div`
    width:100%;
    min-height:80px;
    padding:12px 0 8px 0;
    
    border-radius:30px;
    border: 1px solid #d9d9d9;
    background-color:white;

    display:flex;
    flex-direction:column;

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

export const TeamPage__Section__PersonalSchedule__Header = styled.div`
    height:100%;
    padding: 0 12px 8px 12px;

    display:flex;
    justify-content:space-between;
    align-items:center;

    cursor: pointer;
`

export const TeamPage__Section__PersonalSchedule__Left = styled.div`
    height:100%;

    display:flex;
    align-items:center;
    gap: 8px;
`

export const TeamPage__Section__PersonalSchedule__Left__Img = styled.div`
    height:56px;
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

export const TeamPage__Section__PersonalSchedule__Section = styled.div`
    display:flex;
    flex-direction:column;
`

export const TeamPage__Section__PersonalSchedule__Section__TeamSc = styled.div`
    padding: 2px 12px 6px 12px;
    display:flex;
    flex-direction:column;
    gap:4px;

    border-top:1px solid #d9d9d9;
`

export const TeamPage__Section__PersonalSchedule__Section_detailSc = styled.div`
    padding: 2px 12px 2px 16px;
    border-top:1px solid #d9d9d9;

    display:flex;
    justify-content:space-between;
`


export const TeamPage__PersonalSchedule__BottomMenu__Container = styled.div`
    width:100%;
    padding: 20px 0 10px 0;

    display:flex;
    flex-direction:column;
`

export const TeamPage__PersonalSchedule__BottomMenu__Menu = styled.div`
    width:100%;
    padding: 8px;

    border-top: 1px solid #d9d9d9;

    display:flex;
    justify-content:center;
`


export const TeamPage__DatePickerWrapper = styled.div`
    width: 100%;
    
    .react-datepicker-wrapper {
        width: 100%;
    }
    
    .react-datepicker__input-container {
        width: 100%;
    }
    
    .react-datepicker__input-container input {
        width: 100%;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        padding: 5px 12px;
        font-size: 14px;
        line-height: 20px;
    }
`;