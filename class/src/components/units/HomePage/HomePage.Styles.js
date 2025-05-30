import styled from "@emotion/styled"


export const HomePage__Wrapper = styled.div`
    width:100%;
    min-height:100vh;

    background:linear-gradient(to bottom, #e8f7ff, #ffffff);
    position:relative;
`

export const HomePage__Container = styled.div`
    width:100%;
    padding:8px;
`

export const HomePage__Header = styled.div`
    width:100%;

    display:flex;
    flex-direction:row;
    justify-content:space-between;
`

export const HomePage__Header_Left = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`

export const HomePage__Header__Left__Menu = styled.div`
    height:100%;
    aspect-ratio:1/1;

    display:flex;
    justify-content:center;
    align-items:center;

    cursor: pointer;
`

export const HomePage__Header_Right = styled.div`
    display:flex;
    flex-direction:row;

    gap:8px;
`

export const HomePage__Header__Right__User = styled.div`
    height:100%;
    aspect-ratio:1/1;

    display:flex;
    justify-content:center;
    align-items:center;

    cursor: pointer;
`

export const HomePage__Section = styled.div`
    width:100%;
    padding: 20px 0;

    display:flex;
    flex-direction:column;
    gap:8px;
`

export const HomePage__Section__Title = styled.div`
    width:100%;
    font-size:18px;
`

export const HomePage__Section__Profile__Container = styled.div`
    width:100%;
    height:100px;
    padding: 12px 12px;

    border-radius:30px;
    border: 1px solid #d9d9d9;
    background-color:white;

    display:flex;
    flex-direction:row;
    align-items:center;
    gap:8px;
`

export const HomePage__Section__Profile__ProfileImage = styled.div`
    height:100%;
    aspect-ratio:1/1;
    border-radius:50%;

    overflow:hidden;
    background-image:${(props) => (`url(${props.profileImage})`)};
    background-size:cover;
`

export const HomePage__Section__Profile__ProfileImageCover = styled.div`
    width:100%;
    height:100%;
    background-color: rgba(0, 0, 0, 0.4);
    color:white;

    display:flex;
    justify-content:center;
    align-items:center;

    cursor:pointer;
    opacity:${(props) => (props.isProfileAdj?"1":"0")};
    

    transition: 500ms all ease-in-out;
`

export const HomePage__Section__Profile__Content = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;

    font-size:18px;
    
`

