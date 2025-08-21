import Footer from "@/layout/footer/footer";
import FAQ from "@/layout/sections/FAQ";
import Hero from "@/layout/sections/hero";
import Mission from "@/layout/sections/mission";
import NewsLetter from "@/layout/sections/newsLetter";
import Services from "@/layout/sections/services";
import Testimonials from "@/layout/sections/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Services />
      <Testimonials />
      <NewsLetter />
      <FAQ />
      <Footer />
    </>
  );
}
