import '../styles/globals.css'
import type { AppProps } from 'next/app'
import UserProvider from '../context/UserContext'
import ModalProvider from '../context/ModalContext'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Modal from '../components/Modal'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <UserProvider>
      <Header />
      <ModalProvider>
        <Modal />
        <Component {...pageProps} />
      </ModalProvider>
      <Footer />
    </UserProvider>
  )

}

export default MyApp
