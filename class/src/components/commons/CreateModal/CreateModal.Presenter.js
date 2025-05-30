import { CreateModal__Container, CreateModal__Wrapper } from "./CreateModal.Styles";

export default function CreateModalUI({children, isModalOpen, setIsModalOpen}){

    return(
        <CreateModal__Wrapper
            isModalOpen = {isModalOpen}
            onClick={() => {setIsModalOpen(false)}}
        >
            <CreateModal__Container
            onClick={(e) => {e.stopPropagation()}}
            >
                {children}
            </CreateModal__Container>
        </CreateModal__Wrapper>
    )
}