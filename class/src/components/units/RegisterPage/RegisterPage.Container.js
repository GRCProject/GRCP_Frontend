import { useState } from "react";
import RegisterPageUI from "./RegisterPage.Presenter";

export default function RegisterPageLogic(){
    const [error,setError] = useState(null);
    return(
        <RegisterPageUI
            error={error}
        ></RegisterPageUI>
    )
}