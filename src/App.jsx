import {
  Features,
  Footer,
  Heros,
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
        <Heros />
      </div>
      <Features />
      <Workflows />
      <Pricing />
      <Testimonial />
      <Footer />
    </>
  );
}
