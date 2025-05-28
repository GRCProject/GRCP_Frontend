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
            const response = await axios.post("/api/public/member/login/local", {
              memberId,
              password,
            });
      
            login(
              // login 결과물 (토큰 제외)
              {
                memberId,
                nickname: response.data.user.name,
              },
              response.data.token,
            );
      
            router.push("/");
          } catch (error) {
            setError("로그인 실패! 아이디와 비밀번호를 확인하세요.");
          } finally{
            //개발용
            router.push("/home")
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