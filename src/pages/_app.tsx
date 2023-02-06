import { type AppType } from "next/app";

import { api } from "../utils/api";

import "../styles/globals.css";

import { Fredericka_the_Great } from '@next/font/google'

const fredericka = Fredericka_the_Great({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-fredericka',
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${fredericka.variable} font-sans`}>
      <Component {...pageProps} />
    </main>  )
};

export default api.withTRPC(MyApp);
