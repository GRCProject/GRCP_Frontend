import styled from "@emotion/styled"
import { keyframes } from "@emotion/react"

export const SideMenu__Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: rgba(0, 0, 0, 0.4);

    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: ${(props) => (props.isMenuOpen?"1":"-1")};
    opacity: ${(props) => (props.isMenuOpen?"1":"0")};
    overflow:hidden;

    transition:700ms all ease-out;
`

export const SideMenu__Container = styled.div`
    width:40%;
    height:100%;
    padding: 20px 8px;

    background-color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:8px;

    transform:${(props) => (props.isMenuOpen?"":"translateX(-120%)")};
    transition:700ms all ease-in-out;
    z-index:2;
`

export const SideMenu__Title = styled.div`
    width:100%;
    padding: 4px;

    border-radius:4px;
    background-color:${(props) => (props.activeTab?"#ececec":"")};

    display:flex;
    align-items:center;
    gap: 12px;

    font-size:18px;
    font-weight:700;
    cursor: pointer;
`

export const SideMenu__Title__SB = styled.div`
    width:100%;
    padding: 4px;

    display:flex;
    justify-content:space-between;
    align-items:center;

    font-size:18px;
    line-height: 22px;
    font-weight:700;

    border-bottom: 1px solid #d9d9d9;
`

export const SideMenu__Subtitle = styled.div`
    width:100%;
`

export const SideMenu__Plus = styled.div`
    height:100%;
    aspect-ratio:1/1;
    border-radius:4px;

    cursor: pointer;
    &:hover{
        background-color:#ececec;
    }
`

export const SideMenu__Team__Wrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    gap:4px;
`

export const SideMenu__Team__Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;

    overflow:hidden;
    z-index:2;

    transition: 500ms all ease-in-out;
`

const down = keyframes`
    from{
        opacity:0;
        height:0%;
    }
    to{
        opacity:1;
        transform:translateY();
    }
` 

export const SideMenu__Team__Element = styled.div`
    width:100%;
    padding: 4px 8px;
    border-bottom:1px solid #d9d9d9;

    flex-direction:column;
    gap:2px; 

    display:flex;
    animation: ${down} 500ms linear 1;
`

export const SideMenu__Team_Name = styled.div`
    width:100%;
    padding:2px 4px;
    border-radius:8px;

    display:flex;
    justify-content:space-between;
    align-items:center;

    cursor: pointer;
    &:hover{
        background-color:#ececec;
    }
`

export const SideMenu__Team__name__Text = styled.div`
    width:100%;
    font-size:16px;
    text-overflow:ellipsis;
    overflow:hidden;
    white-space:nowrap;
`


export const SideMenu__Team__Schedule = styled.div`
    width:100%;
    padding:4px;
    border-radius:4px;

    font-size:14px;

    display:flex;
    align-items:center;
    gap: 4px;
    cursor: pointer;

    &:hover{
        background-color:#ececec;

    }
`

export const SideMenu__Team__Member = styled.div`
    width:100%;
    padding:4px;
    border-radius:4px;

    font-size:14px;

    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const SideMenu__Team__AddTeam = styled.div`
    width:100%;
    padding: 2px;
    border: 1px solid #d9d9d9;
    border-radius:8px;

    font-size:14px;
    color: #333333;
    line-height:1px;

    display:flex;
    align-items:center;
    justify-content:center;

    cursor: pointer;

    &:hover{
        background-color:#ececec;
    }
`

export const SideMenu__CreateModal__Input = styled.input`
    width:100%;
    border:1px solid #d9d9d9;
    border-radius:4px;
    padding: 5px 12px;

    font-size: 14px;
    line-height:20px;
`  

export const SideMenu__CreateModal__Button = styled.div`
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