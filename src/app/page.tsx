import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Products from "@/components/products/Products";
import Story from "@/components/story/Story";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Story />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
