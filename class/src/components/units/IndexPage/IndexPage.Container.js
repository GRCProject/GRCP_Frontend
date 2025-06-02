import { useAuth } from "@/utils/AuthContext";
import IndexPageUI from "./IndexPage.Presenter"
import { useRouter } from "next/router";

export default function IndexPageLogic(){
    const {user} = useAuth();
    const router = useRouter();
    
    const onClickHome = () => {
        if(user){
            router.push("/home");
        }
        else{
            router.push("/login");
        }        
    }

    return(
        <IndexPageUI
            onClickHome = {onClickHome}
        ></IndexPageUI>
    )
}