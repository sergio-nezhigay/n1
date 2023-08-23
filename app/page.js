"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
      </main>
      <footer>
        <Contacts />
      </footer>
    </>
  );
}
