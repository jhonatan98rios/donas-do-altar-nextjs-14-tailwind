import { Header } from "@/partials/Header";
import styles from './style.module.scss'
import { Navbar } from "@/partials/Navbar";
import About from "@/partials/About";

export default function Home() {
  return (
    <main
      className={`flex flex-col font-base ${styles.static_bg}`}
    >
      <Navbar />
      <Header />
      <About />

    </main>
  )
}
