import styles from './style.module.scss'
import { GoogleAnalytics } from '@next/third-parties/google'

import { Header } from "@/partials/Header";
import { Navbar } from "@/partials/Navbar";
import { About } from "@/partials/About";
import { Services } from '@/partials/Services';
import { PhraseBanner } from '@/partials/PhraseBanner';
import { Testimonials } from '@/partials/Testimonials';
import { Contact } from '@/partials/Contact';

export default function Home() {
  return (
    <main
      className={`flex flex-col font-base scroll-smooth ${styles.static_bg}`}
    >
      <Navbar />
      <Header />
      <About />
      <Services />
      <PhraseBanner />
      <Testimonials />
      <Contact />
      <GoogleAnalytics gaId="G-ZP3RWNGZGV" />
    </main>
  )
}
