import Features from "./components/Features";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import Hero from "./components/hero";
import Pricing from "./components/pricing";
import Workflows from "./components/workflow";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-20">
        <Hero />
      </div>
      <Features />
      <Workflows />
      <Pricing/>
      <Testimonial/>
      <Footer/>
    </>
  );
}
