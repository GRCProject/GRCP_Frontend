import { BottomMenu__Wrapper, BottomMenu__Container } from "./BottomMenu.Styles";

export default function BottomMenuUI({children ,isModalOpen, setIsModalOpen}){

    return(
        <BottomMenu__Wrapper
            isModalOpen = {isModalOpen}
            onClick={() => {setIsModalOpen(false)}}
          >
              <BottomMenu__Container
            onClick={(e) => {e.stopPropagation()}}
            isModalOpen = {isModalOpen}
            >
                {children}
            </BottomMenu__Container>
        </BottomMenu__Wrapper>
    );
}