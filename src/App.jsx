import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
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
