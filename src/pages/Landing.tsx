
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import { Demo } from "./Demo";
import { Faq } from "./Faq";
import { Home } from "./Home";
import Howitworks from "./Howitworks";
import Testimonials from "./Testimonials";
import { Appbar } from "../components/Appbar";

export const Landing = () => {
  return (
    <div>
      <Appbar />
      <div id="home">
        <Home />
      </div>
      
      <div id="howitworks">
        <Howitworks />
      </div>
      <div id="features">
        <Demo />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="resources">
        <Faq />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};
