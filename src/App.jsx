import "./App.css";
import About from "./components/About";
import Companies from "./components/Companies";
import Footer from "./components/Footer";
import FormComponent from "./components/FormComponent";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import Works from "./components/Works";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Companies />
      <Works />
      <Testimonial />
      <FormComponent />
      <Footer />
    </main>
  );
}

export default App;
