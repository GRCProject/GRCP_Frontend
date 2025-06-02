import { useState } from "react";
import LoginPageUI from "./LoginPage.Presenter";
import { useRouter } from "next/router";
import { useAuth } from "@/utils/AuthContext";
import axios from "axios";

export default function LoginPageLogic(){
    const router = useRouter();
    const {login} = useAuth();

    const [memberId, setMemberId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);


    const onChangeId = (e) => {setMemberId(e.target.value)};

    const onChangePassword = (e) =>{setPassword(e.target.value)}

    const onClickSubmit = async () => {
        try {
            const response = await axios.post("/api/auth.php", {
              userid:memberId,
              password:password,
            });
            
            login(
              {
                memberId,
                id:response.data.data.user.id,
                name: response.data.data.user.name,
                email:response.data.data.user.email,
                profile_image:response.data.data.user.profile_image,
              },
              response.data.data.token,
            );
      
            router.push("/home");
          } catch (error) {
            setError("로그인 실패! 아이디와 비밀번호를 확인하세요.");
            console.error(error);
          } finally{
            //개발용
            // router.push("/home")
          }
        };

    const onClickRegister = () =>{
        router.push("/register");
    }

    return(<LoginPageUI
      onChangeId={onChangeId}
      onChangePassword={onChangePassword}
      onClickSubmit={onClickSubmit}
      onClickRegister={onClickRegister}
      error={error}
    ></LoginPageUI>)
}