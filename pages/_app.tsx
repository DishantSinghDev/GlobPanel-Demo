import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Provider as RWBProvider } from "react-wrap-balancer";
import cx from "classnames";
import localFont from "@next/font/local";
import { Inter } from "@next/font/google";
import "../styles/error.css"
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import LoadingBar from 'react-top-loading-bar'

const sfPro = localFont({
  src: "../styles/SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  const [progress, setProgress] = useState(0)
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', ()=> {
      setProgress(60)
    })
    router.events.on('routeChangeComplete', ()=> {
      setProgress(100)
    })
  });

  return (
    <SessionProvider session={session}>
      <RWBProvider>
      <LoadingBar
        color='gray'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <div className={cx(sfPro.variable, inter.variable)}>
          <Component {...pageProps} />
        </div>
      </RWBProvider>
      <Analytics />
    </SessionProvider>
  );
}
