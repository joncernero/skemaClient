import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
// import Reviews from "@/components/Reviews";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Black Wren Digital | Home",
};

export default function Home() {
  return (
    <>
      <div className="relative w-full">
        <Header />
        <Hero />
        <About />
        <Stats />
        <Pricing />
        {/* <Reviews /> */}
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
