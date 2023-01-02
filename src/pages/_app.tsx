import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { ToastContainer } from "react-toastify";
import LayoutGuard from "../layouts/LayoutGuard";
import "antd/dist/reset.css";
function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <LayoutGuard>
          <Component {...pageProps} />
        </LayoutGuard>
      </Provider>
      <ToastContainer
        className={`rounded-3xl`}
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </SessionProvider>
  );
}

export default MyApp;
