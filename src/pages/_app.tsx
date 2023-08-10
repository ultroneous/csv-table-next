import type { AppProps } from "next/app";

import Toaster from "@components/common/toaster";
import Layout from "@components/common/layout";

import "@styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
