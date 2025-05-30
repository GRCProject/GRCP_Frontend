import styled from "@emotion/styled"

export const CreateModal__Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: rgba(0, 0, 0, 0.4);

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: ${(props) => (props.isModalOpen?"1":"-1")};
    opacity: ${(props) => (props.isModalOpen?"1":"0")};
    overflow:hidden;

    transition:700ms all ease-out;
`

export const CreateModal__Container = styled.div`
    width:60%;
    padding: 20px 8px;

    background-color:white;
    border-radius:8px;
    border: 1px solid #d9d9d9;

    display:flex;
    flex-direction:column;
    align-items:center;
    gap:8px;

    transition:700ms all ease-in-out;
    z-index:2;
`