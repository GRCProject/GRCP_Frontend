import { useState } from "react";
import RegisterPageUI from "./RegisterPage.Presenter";
import { useRouter } from "next/router";
import axios from "axios";

export default function RegisterPageLogic(){
    const router = useRouter();

    const [error,setError] = useState(null);
    const [userId,setUserId] = useState(null);
    const [password,setPassword] = useState(null);
    const [rePassword, setRePassword] = useState(null);
    const [name,setName] = useState(null);
    const [email,setEmail] = useState(null);

    const onChangeUserId = (e) => {setUserId(e.target.value);}
    const onChangePassword = (e) => {setPassword(e.target.value);}
    const onChangeRePassword = (e) => {setRePassword(e.target.value);}
    const onChangeName = (e) => {setName(e.target.value);}
    const onChangeEmail = (e) => {setEmail(e.target.value);}

    const onClickSubmit = async() => {
        if(userId && password && name && email && (password == rePassword)){
            try{
                const response = await axios.post(
                    "/api/users.php",
                    {
                        userid:userId,
                        name:name,
                        email:email,
                        password:password
                    }
                );
                if(response.status === 201){
                    alert("회원가입 성공! 로그인해주세요.");
                    router.push("/login")
                }
            }catch(error){
                console.error(error);

                const message =
                    error?.response?.data?.message ||
                    error?.response?.data?.error ||
                    error.message;
                const newErrors = [];

            if (message?.includes("EXISTING_ID")) {
                newErrors.push("입력하신 아이디는 이미 사용 중입니다.");
            }
            if (message?.includes("EXISTING_EMAIL")) {
                newErrors.push("입력하신 이메일은 이미 사용 중입니다.");
            }
            if (message?.includes("UID_REQUIRED")) {
                newErrors.push("아이디를 입력하지 않았습니다.");
            }
            if (message?.includes("NAME_REQUIRED")) {
                newErrors.push("이름을 입력하지 않았습니다.");
            }
            if (message?.includes("EMAIL_REQUIRED")) {
                newErrors.push("이메일을 입력하지 않았습니다.");
            }
            if (message?.includes("PW_REQUIRED")) {
                newErrors.push("비밀번호를 입력하지 않았습니다.");
            }
            
            setError(newErrors.join("\n"));
            }
        }else{
            setError("")
        }
    }
    return(
        <RegisterPageUI
            error={error}
            onChangeEmail ={onChangeEmail}
            onChangeName = {onChangeName}
            onChangePassword = {onChangePassword}
            onChangeRePassword = {onChangeRePassword}
            onChangeUserId = {onChangeUserId}
            onClickSubmit = {onClickSubmit}
        ></RegisterPageUI>
    )
}