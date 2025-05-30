import CreateModalUI from "./CreateModal.Presenter";

export default function CreateModalLogic({children, isModalOpen, setIsModalOpen}){

    return(
        <CreateModalUI
            isModalOpen = {isModalOpen}
            setIsModalOpen = {setIsModalOpen}
        >{children}</CreateModalUI>
    )
}