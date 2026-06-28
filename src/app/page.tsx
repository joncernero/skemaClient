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
  openGraph: {
    title: "Black Wren Digital",
    description:
      "Fast, modern websites, APIs, and custom web applications for businesses.",
    url: "https://blackwrendigital.com",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Black Wren Digital",
  url: "https://blackwrendigital.com",
  email: "contact@blackwrendigital.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Indianapolis",
    addressRegion: "IN",
    addressCountry: "US",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
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
