import styled from "@emotion/styled"

export const IndexPage__Container = styled.div`
    width:100%;
    height:100%;
    min-height:100vh;
    background:linear-gradient(to bottom, #e8f7ff, #ffffff);
`

export const IndexPage__Header = styled.div`
    width:100%;
    padding: 20px 8px;

`

export const IndexPage__Section = styled.div`
    width:100%;
    padding:calc(30%) 0 40px 0;
    height:100%;

    display:flex;
    flex-direction:column;
    align-items:center;
`

export const IndexPage__Section__Text = styled.div`
    font-size:1.5em;
    font-weight:700;
    text-align:center;
    line-height:1.5em;
`

export const IndexPage__LoginButton = styled.div`
    padding: 10px 20px;
    background-color: #5AC8FA;
    color:white;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    font-weight:700;
    cursor: pointer;
`