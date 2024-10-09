import {
  Features,
  Footer,
  Hero,
  Navbar,
  Pricing,
  Testimonial,
  Workflows,
} from "./components";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-20">
        <Hero />
      </div>
      <Features />
      <Workflows />
      <Pricing />
      <Testimonial />
      <Footer />
    </>
  );
}
