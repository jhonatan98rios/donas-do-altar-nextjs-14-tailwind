import styles from './style.module.scss'

import { Header } from "@/partials/Header";
import { Navbar } from "@/partials/Navbar";
import { About } from "@/partials/About";
import { Services } from '@/partials/Services';
import { PhraseBanner } from '@/partials/PhraseBanner';
import { Testimonials } from '@/partials/Testimonials';
import { Contact } from '@/partials/Contact';
import { Social } from '@/partials/Social';

export default function Home() {
  return (
    <main
      className={`flex flex-col font-base ${styles.static_bg}`}
    >
      <Navbar />
      <Header />
      <About />
      <Services />
      <PhraseBanner />
      <Testimonials />

      <Contact />

      <Social />

    </main>
  )
}
