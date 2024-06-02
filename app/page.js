import NavBar from "@/components/NavBar";
import Hero from "@/components/hero/Hero";
import styles from "./page.module.css";
import Services from "@/components/services/Services";
import Portofolio from "@/components/portofolio/Portofolio";
import Contact from "@/components/contact/Contact";
// const items = ["Homepage", "Services", "Portofolio", "Contact", "About"];
export default function Home() {
  return (
    <main className="">
      <section className={styles.background} id="Homepage">
        <Hero />
      </section>
      <section className={styles.background + "pt-10 md:pt-0"} id="Services">
        <Services />
      </section>
      <Portofolio />
      <section id="Contact">
        <Contact />
      </section>
    </main>
  );
}
