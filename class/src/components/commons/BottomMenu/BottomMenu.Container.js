import BottomMenuUI from "./BottomMenu.Presenter";

export default function BottomMenuLogic({children, isModalOpen, setIsModalOpen,}){

    return(<BottomMenuUI
        isModalOpen = {isModalOpen}
        setIsModalOpen = {setIsModalOpen}
    >{children}</BottomMenuUI>);
}