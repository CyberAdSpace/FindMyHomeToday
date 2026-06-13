import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RealEstate from "@/components/RealEstate";
import Rentals from "@/components/Rentals";
import About from "@/components/About";
import SpringHill from "@/components/SpringHill";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <RealEstate />
      <Rentals />
      <About />
      <SpringHill />
      <Contact />
      <Footer />
    </>
  );
}
