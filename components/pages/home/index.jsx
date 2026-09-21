import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "./hero";
import Stats from "./stats";
import About from "./about";
import Process from "./process";
import Services from "./services";
import WhyUs from "./why-us";
import Materials from "./materials";
import Projects from "./projects";
import Testimonials from "./testimonials";
import Quote from "./quote";
import Cta from "./cta";
import WhatsappFloat from "@/components/common/whatsapp-float";
import ScrollToTop from "@/components/common/scroll-to-top";

// Landing de una sola página. Para ocultar una sección, comenta su línea.
const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Process />
        <Services />
        <WhyUs />
        <Materials />
        <Projects />
        <Testimonials />
        <Quote />
        <Cta />
      </main>
      <Footer />
      <WhatsappFloat />
      <ScrollToTop />
    </>
  );
};

export default Home;
