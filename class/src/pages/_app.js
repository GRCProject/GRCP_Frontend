import MainContainerLogic from "@/components/commons/MainContainer/MainContainer.Container";
import "@/styles/globals.css";
import { AuthProvider } from "@/utils/AuthContext";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AuthProvider>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={router.asPath}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          style={{
            minHeight: "100vh",
            width: "100%",
            maxWidth: "500px",
            overflowX: "hidden",
          }}
        >
          <MainContainerLogic>
        <Component {...pageProps} />
          </MainContainerLogic>
        </motion.div>
      </AnimatePresence>
    </AuthProvider>
  );
}
