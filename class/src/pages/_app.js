import MainContainerLogic from "@/components/commons/MainContainer/MainContainer.Container";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
  <MainContainerLogic>
    <Component {...pageProps} />
  </MainContainerLogic>
  );
}
