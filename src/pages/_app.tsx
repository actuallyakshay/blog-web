import "@/styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider
      clientId={
        "601004124281-d13pl3ha3ubepk8and5gegh4mjnfhdoo.apps.googleusercontent.com"
      }
    >
      <ToastContainer />
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
}
