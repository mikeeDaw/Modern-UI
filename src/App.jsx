import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";
import Benefits from "./components/sections/Benefits";
import Collabs from "./components/sections/Collabs";
import Hero from "./components/sections/Hero";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collabs />
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
