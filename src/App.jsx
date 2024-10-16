import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";
import Benefits from "./components/sections/Benefits";
import Collabs from "./components/sections/Collabs";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Pricing from "./components/sections/Pricing";
import Roadmap from "./components/sections/Roadmap";
import Services from "./components/sections/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collabs />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      {
        // These are just svg gradient definitions to be consumed by others!
        // Declared here on root so can be used anywhere.
      }
      <ButtonGradient />
    </>
  );
};

export default App;
