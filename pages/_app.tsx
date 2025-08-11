import '../styles/globals.css'
import { useState } from "react";
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'

type User = {
  id: string;
  accessToken: string;
  username: string;
};

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User>({ id: '', accessToken: '', username: '' });

  return (<>
    <Header />
    <Component {...pageProps} user={user} setUser={setUser} />
    <Footer />
  </>)

}

export default MyApp
