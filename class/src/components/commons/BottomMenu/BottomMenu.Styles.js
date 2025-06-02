import styled from "@emotion/styled"

export const BottomMenu__Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;


    display: flex;
    align-items: flex-end;
    justify-content: center;
    z-index: ${(props) => (props.isModalOpen?"1":"-1")};
    overflow:hidden;
`

export const BottomMenu__Container = styled.div`
    width:80%;

    background-color:white;
    border-radius:8px 8px 0 0;
    border: 1px solid #d9d9d9;

    display:flex;
    flex-direction:column;
    align-items:center;
    gap:8px;

    transform:${(props) => (props.isModalOpen?"none":"translateY(100%)")};
    transition:1s all ease-in-out;
    z-index:2;
`