import { useAuth } from "@/utils/AuthContext";
import HomePageUI from "./HomePage.Presenter";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function HomePageLogic(){
    const {token} = useAuth();
    const router = useRouter();

    useEffect(() => {
        // if(!token){
        //     alert("잘못된 접근입니다!");
        //     router.push("/");
        // }
    },[token])

    return(
        <HomePageUI></HomePageUI>
    )
}