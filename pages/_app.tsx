import '../styles/globals.css'
import type { AppProps } from 'next/app'
import UserContext from '../context/UserContext';
import Header from '../components/Header'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }: AppProps) {

  return (<>
    <Header />
    <UserContext>
      <Component {...pageProps} />
    </UserContext>
    <Footer />
  </>)

}

export default MyApp
