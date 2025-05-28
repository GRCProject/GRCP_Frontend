import IndexPageUI from "./IndexPage.Presenter"
import { useRouter } from "next/router";

export default function IndexPageLogic(){
    const router = useRouter();
    
    const onClickHome = () => {
        router.push("/login");
    }

    return(
        <IndexPageUI
            onClickHome = {onClickHome}
        ></IndexPageUI>
    )
}