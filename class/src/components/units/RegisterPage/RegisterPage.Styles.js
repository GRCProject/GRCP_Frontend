import styled from "@emotion/styled"

export const RegisterPage__Wrapper = styled.div`
    width:100%;
    min-height:100vh;
    
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;

    transform:translateY(-10%);

    gap:8px;
    background:linear-gradient(to bottom, #e8f7ff, #ffffff);
`

export const RegisterPage__Container = styled.div`
    width:320px;
    border:1px solid #d9d9d9;
    border-radius:4px;
    padding: 16px;
    background-color:#ffffff;

    display:flex;
    flex-direction:column;
    align-items:center;

    gap:8px;
`

export const RegisterPage__Container__Subtitle = styled.div`
    width:100%;
    font-size: 14px;
    color:#767676;
`

export const RegisterPage__Container__Input = styled.input`
    width:100%;
    border:1px solid #d9d9d9;
    border-radius:4px;
    padding: 5px 12px;

    font-size: 14px;
    line-height:20px;
`   

export const RegisterPage__Container__Button = styled.div`
    width:100%;
    padding: 5px 12px;
    margin-top:10px;
    border-radius:4px;

    background-color:#1f883d;
    color:white;

    display:flex;
    justify-content:center;
    align-items:center;

    font-size:14px;
    font-weight:700;

    cursor: pointer;
`

export const RegisterPage__Container__ErrorMsg = styled.div`
    width:100%;
    
    text-align:center;
    font-size:12px;
    color:red;
`