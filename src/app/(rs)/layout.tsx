import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default async function RSLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="mx-auto w-full max-w-full">
      <ScrollToTop />
      <Header />
      <>{children}</>
      <Footer />
    </div>
  );
}
