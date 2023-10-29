import '@/styles/globals.css'
import {Montserrat} from 'next/font/google'
import Head from 'next/head'
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';


const mon=Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={`${mon.variable} font-mont bg-light w-full dark:bg-dark min-h-screen`}>
      <Navbar/>
      <AnimatePresence mode='wait'>
      <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
      <Footer/>
    </main>
    </>
  )
}
