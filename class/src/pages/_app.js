import MainContainerLogic from "@/components/commons/MainContainer/MainContainer.Container";
import "@/styles/globals.css";
import { AuthProvider } from "@/utils/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <MainContainerLogic>
        <Component {...pageProps} />
      </MainContainerLogic>
    </AuthProvider>
  );
}
