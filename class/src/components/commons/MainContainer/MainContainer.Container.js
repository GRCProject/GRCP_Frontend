import MainContainerUI from "./MainContainer.Presenter";

export default function MainContainerLogic({children}){

    return(
        <MainContainerUI>
            {children}
        </MainContainerUI>
    )
}